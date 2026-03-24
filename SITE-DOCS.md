# YTStack Site - Technical Documentation

## 🏗️ Stack & Architecture

### Frontend
- **Language**: JavaScript (React 18)
- **Framework**: React + CRACO (Create React App override)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion (3D effects, transitions)
- **Routing**: React Router v6
- **UI Components**: shadcn/ui (60+ components)
- **Toast Notifications**: Sonner
- **Build Tools**: Craco + PostCSS + Tailwind + Webpack
- **Dev Server**: Vite-like HMR with CRACO

### Backend
- **Language**: Python 3.12
- **Framework**: FastAPI (REST API)
- **Testing**: pytest
- **Dependencies**: requirements.txt (FastAPI, uvicorn, pytest)
- **Endpoint**: `/api/contact` (form submissions)
- **Deployment**: server.py (uvicorn main:app)

## 🎨 3D Effects & Animations (HomePage) - JavaScript + Framer Motion + CSS

### Isometric Grid
```jsx
<svg viewBox="0 0 1000 800">
  <pattern id="isoGrid" width="60" height="35">
    <path d="M0 35 L30 17.5 L60 35 M30 17.5 L30 0" stroke="rgba(59, 130, 246, 0.3)"/>
  </pattern>
</svg>
```
- SVG pattern overlay with isometric perspective lines

### Floating 3D Cubes (6 faces each)
```jsx
transformStyle: 'preserve-3d'
rotateX/Y/Z + translateZ for 3D depth
Framer Motion infinite rotation + float
```
- 5 cubes with individual animate/transition props
- Each cube: Front/Back/Left/Right/Top/Bottom faces
- Glassmorphism: `backdrop-blur-sm` + gradient overlays

### Orbit Rings
- 3 concentric animated border rings
- Counter-rotating (`rotate: 360/-360`) infinite loops
- Different durations (20s/25s/30s)

### Floating Tech Icons
- `{ }</> < > [ ]` symbols floating with scale/opacity/y motion
- Staggered delays for cascade effect

### Glowing Particles (20x)
- Random positions + infinite pulse/scale
- `boxShadow` glow effect with size variance

### Gradient Mesh Background
- 3 radial gradient blurs (`blur-3xl`)
- Strategic positioning for depth illusion

## 🚀 Pages & Features

| Page | Sections | Special Features |
|------|----------|-----------------|
| Home | Hero, Services, Process, Pricing, Portfolio, CTA, Contact | All 3D effects, Contact form API |
| Services | Hero, Services grid, Pricing teaser, CTA | shadcn cards, animations |
| Pricing | Hero, Pricing cards, CTA | Popular badge, feature lists |
| Process | Hero, 6-step process, CTA | Progress line animation |
| About | Hero, Team, Values, CTA | Stats counters |
| Contact | Hero, Contact form, Map, CTA | Backend integration |

## 🎛️ Components

- **Navbar**: Fixed, scroll-aware (py-3/py-1.5), mobile menu
- **Footer**: 4-column grid, social links, contact info
- **SectionWrapper**: Responsive container + header
- **shadcn/ui**: 60+ components (Button, Card, Dialog, etc)
- **ScrollToTop**: Auto scroll to top on route change

## ⚙️ Scripts & Commands
```bash
# Dev
cd frontend && npm start           # http://localhost:3000

# Build  
cd frontend && npm run build       # dist/ folder

# Backend
cd backend && uvicorn server:app   # http://localhost:8000

# Tests
cd backend && pytest
```

## 📱 Responsive
- Tailwind mobile-first
- Grid: `md:grid-cols-2 lg:grid-cols-3`
- Navbar: Mobile hamburger → desktop horizontal
- Images: `aspect-video object-cover`

## 🔧 Customizations Made
1. **Recent Projects**: 6→2 items (live sites only)
2. **HomePage Order**: Services→Process→Pricing→Portfolio
3. **Navbar**: Shrunk py-4→py-3, py-2→py-1.5
4. **Title**: `Emergent` → `YTSTACK`
5. **ScrollToTop**: Pages open from top
6. **CTAArrowPointer**: Commented (import error fix)
7. **Black Page**: App.js `bg-slate-950` → `bg-white`
8. **ERROR-LOG.md**: All issues documented

## 🐛 Known Issues (Ignored)
- WebSocket 443 warnings (VSCode dev server)
- React DevTools suggestion (normal)

**Last Updated**: 2024  
**Site**: http://localhost:3000  
**All tasks complete ✅**
