from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="YTSTACK API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=20)
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)

class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    phone: Optional[str]
    subject: Optional[str]
    message: str
    created_at: str
    status: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "YTSTACK API - Build • Code • Deploy"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "YTSTACK API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(data: ContactFormCreate):
    """
    Submit a contact form inquiry.
    Stores the inquiry in the database for follow-up.
    """
    try:
        contact_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()
        
        contact_doc = {
            "id": contact_id,
            "name": data.name,
            "email": data.email,
            "phone": data.phone,
            "subject": data.subject or "General Inquiry",
            "message": data.message,
            "created_at": created_at,
            "status": "new"
        }
        
        await db.contact_inquiries.insert_one(contact_doc)
        
        # Remove _id before returning
        contact_doc.pop("_id", None)
        
        logging.info(f"New contact inquiry received from {data.email}")
        
        return ContactFormResponse(**contact_doc)
        
    except Exception as e:
        logging.error(f"Error saving contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form. Please try again.")

@api_router.get("/contacts", response_model=List[ContactFormResponse])
async def get_contact_inquiries():
    """
    Get all contact form inquiries (admin endpoint).
    """
    try:
        inquiries = await db.contact_inquiries.find({}, {"_id": 0}).to_list(1000)
        return inquiries
    except Exception as e:
        logging.error(f"Error fetching contact inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries.")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
