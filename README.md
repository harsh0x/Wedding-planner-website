# 💍 Élan Weddings | Luxury Wedding Planner MERN Stack Application

A full-stack luxury wedding planner web application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) and styled with **Tailwind CSS**.

---

## 📁 Project Architecture

```
wedding-planner/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection using Mongoose
│   ├── controllers/
│   │   ├── inquiryController.js  # Consultation booking controller
│   │   ├── subscriberController.js# Newsletter signup controller
│   │   └── portfolioController.js# Dynamic portfolio & services controller
│   ├── models/
│   │   ├── Inquiry.js            # Mongoose Inquiry Model (Consultations)
│   │   ├── Subscriber.js         # Mongoose Subscriber Model (Newsletter)
│   │   └── PortfolioItem.js      # Mongoose Portfolio Model
│   ├── routes/
│   │   ├── inquiryRoutes.js      # /api/inquiries
│   │   ├── subscriberRoutes.js   # /api/subscribers
│   │   └── portfolioRoutes.js    # /api/portfolio
│   ├── data/
│   │   └── seedData.js           # Database seeder script
│   ├── .env.example              # Environment variables template
│   ├── server.js                 # Main Express application entrypoint
│   └── package.json              # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnnouncementBar.jsx # Top dusty rose banner (#B07D87)
│   │   │   ├── Navbar.jsx          # Transparent / glass sticky nav with floral logo
│   │   │   ├── HeroSection.jsx     # Hero section with outdoor aisle & CTA buttons
│   │   │   ├── AboutSection.jsx    # 3-column asymmetric layout with photo clusters
│   │   │   ├── MosaicGallery.jsx   # Curated 7-photo wedding moments
│   │   │   ├── ServicesSection.jsx # Bespoke planning cards (01, 02, 03)
│   │   │   ├── PortfolioSection.jsx# Interactive carousel & "And more!" grid
│   │   │   ├── CommitmentSection.jsx# Vision & execution with photo collage
│   │   │   ├── WhyChooseUsSection.jsx# Dusty rose background with floating bubbles
│   │   │   ├── DestinationSection.jsx# South Florida luxury dark theme
│   │   │   ├── FaqSection.jsx      # Expandable accordions & flanking images
│   │   │   ├── NewsletterSection.jsx# Connected to Express newsletter API
│   │   │   ├── Footer.jsx          # Monogram logo, social links, studios
│   │   │   ├── BookingModal.jsx    # Connected to Express booking API
│   │   │   ├── LightboxModal.jsx   # Fullscreen photo inspection
│   │   │   └── Toast.jsx           # Real-time feedback alerts
│   │   ├── data/
│   │   │   └── weddingData.js      # Curated photography & copy metadata
│   │   ├── services/
│   │   │   └── api.js              # Axios client connecting to backend API
│   │   ├── App.jsx                 # Integrated single-page React app
│   │   ├── main.jsx                # React root mount
│   │   └── index.css               # Tailwind & custom typography directives
│   ├── index.html                  # Vite HTML entry with fonts & meta
│   ├── tailwind.config.js          # Dusty rose (#B07D87) & font design system
│   ├── vite.config.js              # Vite bundler & API proxy configuration
│   └── package.json                # Frontend dependencies
│
├── README.md                       # Complete MERN stack documentation
└── index.html                      # Standalone zero-setup browser build
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local instance or MongoDB Atlas URI)

---

### 2. Backend Setup

1. Open your terminal in the project root:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Make sure `MONGO_URI` points to your active MongoDB database.
4. *(Optional)* Seed initial portfolio items into MongoDB:
   ```bash
   npm run seed
   ```
5. Start the Express API server:
   ```bash
   npm run dev
   # or
   npm start
   ```
   The backend server will run at `http://localhost:5000`.

---

### 3. Frontend Setup

1. In a new terminal window, navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   The frontend application will be live at `http://localhost:5173`.

---

## 📡 REST API Endpoints

| Method | Endpoint | Description | Payload |
|---|---|---|---|
| `GET` | `/api/health` | API Health Check | None |
| `POST` | `/api/inquiries` | Submit Wedding Consultation Inquiry | `{ name, partnerName, email, phone, weddingDate, guestCount, budget, service, notes }` |
| `GET` | `/api/inquiries` | List all inquiries | None |
| `POST` | `/api/subscribers` | Subscribe to newsletter | `{ email, source }` |
| `GET` | `/api/subscribers` | List all newsletter subscribers | None |
| `GET` | `/api/portfolio` | Get all portfolio showcases | None |

---

## 🎨 Design System

- **Primary Brand Color**: Dusty Rose (`#B07D87`)
- **Secondary Accent**: Soft Mauve (`#C59B9F`), Rose Dark (`#8C5662`)
- **Neutrals**: Champagne & Pearl Cream (`#FAF6F3`, `#FDFBF9`)
- **Dark Elegance**: Deep Charcoal (`#1F1C1D`, `#2E282A`)
- **Cursive Accent Fonts**: `Great Vibes`, `Alex Brush`
- **Editorial Serif Display**: `Cormorant Garamond`, `Playfair Display`
- **Clean Body Typography**: `Montserrat`, `Inter`

---

## ⚡ Instant Standalone Preview
If you wish to preview the complete design directly without running local Node/npm servers, simply double-click the root `index.html` to view the self-contained live version in any web browser.
