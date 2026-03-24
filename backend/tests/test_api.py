"""
YTSTACK API Tests
Tests for Health Check and Contact Form endpoints
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoints:
    """Health and root endpoint tests"""
    
    def test_health_check(self):
        """Test /api/health returns healthy status"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        
        data = response.json()
        assert data["status"] == "healthy"
        assert data["service"] == "YTSTACK API"
        print("Health check passed")
    
    def test_root_endpoint(self):
        """Test /api/ returns welcome message"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        
        data = response.json()
        assert "message" in data
        assert "YTSTACK" in data["message"]
        print("Root endpoint passed")


class TestContactForm:
    """Contact form endpoint tests"""
    
    def test_contact_form_success(self):
        """Test successful contact form submission"""
        payload = {
            "name": "TEST_Contact User",
            "email": "testcontact@example.com",
            "message": "Test message from pytest"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload
        )
        
        assert response.status_code == 200
        
        data = response.json()
        assert "id" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert data["status"] == "new"
        assert "created_at" in data
        print(f"Contact form submission successful, ID: {data['id']}")
    
    def test_contact_form_with_all_fields(self):
        """Test contact form with all optional fields"""
        payload = {
            "name": "TEST_Full Contact",
            "email": "fullcontact@example.com",
            "phone": "+91 98765 43210",
            "subject": "Project Inquiry",
            "message": "I would like to discuss a web development project."
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload
        )
        
        assert response.status_code == 200
        
        data = response.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        print("Contact form with all fields passed")
    
    def test_contact_form_missing_required_fields(self):
        """Test contact form validation - missing name"""
        payload = {
            "email": "test@example.com",
            "message": "Test message"
            # Missing 'name' field
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload
        )
        
        assert response.status_code == 422  # Validation error
        print("Contact form validation (missing name) passed")
    
    def test_contact_form_invalid_email(self):
        """Test contact form validation - invalid email"""
        payload = {
            "name": "Test User",
            "email": "invalid-email",  # Invalid email format
            "message": "Test message"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload
        )
        
        assert response.status_code == 422  # Validation error
        print("Contact form validation (invalid email) passed")
    
    def test_contact_form_default_subject(self):
        """Test that subject defaults to 'General Inquiry'"""
        payload = {
            "name": "TEST_Default Subject",
            "email": "defaultsubject@example.com",
            "message": "Test message without subject"
            # No subject provided
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload
        )
        
        assert response.status_code == 200
        
        data = response.json()
        assert data["subject"] == "General Inquiry"
        print("Contact form default subject passed")
    
    def test_get_contacts_list(self):
        """Test /api/contacts returns list of inquiries"""
        response = requests.get(f"{BASE_URL}/api/contacts")
        
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
        
        # Should have at least the contacts we just created
        if len(data) > 0:
            contact = data[0]
            assert "id" in contact
            assert "name" in contact
            assert "email" in contact
            assert "message" in contact
        print(f"Get contacts list passed, found {len(data)} contacts")


class TestStatusEndpoints:
    """Status endpoints tests"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        payload = {
            "client_name": "TEST_Pytest Client"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/status",
            json=payload
        )
        
        assert response.status_code == 200
        
        data = response.json()
        assert "id" in data
        assert data["client_name"] == payload["client_name"]
        assert "timestamp" in data
        print(f"Status check created, ID: {data['id']}")
    
    def test_get_status_checks(self):
        """Test getting all status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
        print(f"Get status checks passed, found {len(data)} checks")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
