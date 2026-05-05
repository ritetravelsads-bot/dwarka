# Dwarka Expressway NCR - Project Analysis & Migration Plan

## Executive Summary
This document provides a comprehensive analysis of the existing PHP-based real estate website for Dwarka Expressway NCR. The project will be migrated to Next.js while maintaining the exact same frontend design and all existing functionality.

---

## 1. Current Technology Stack

### Frontend
- **HTML/PHP Templates** - Server-side rendered pages
- **Tailwind CSS** - Via CDN (tailwindcss.com)
- **Custom CSS** - `assets/style.css`
- **JavaScript** - Vanilla JS for interactions
- **Swiper.js** - Hero carousel/slider
- **Font Awesome** - Icons
- **Google Fonts** - Plus Jakarta Sans, Teko, DM Sans, Outfit

### Backend
- **PHP 7/8** - Server-side logic
- **PHPMailer** - Email sending via SMTP
- **Guzzle HTTP** - API requests to backend
- **Session Management** - PHP Sessions for CSRF tokens

### External Services
- **Backend API**: `https://dwarkaexpresswayncr-backend.onrender.com/api/projects`
- **Google reCAPTCHA** - Spam protection
- **SMTP Email** - Gmail SMTP for notifications
- **Google Analytics** - GA4 (G-SWHJZTSNDT)

---

## 2. Page Structure & Routes

### Public Pages

| Current Route | PHP File | Description | Next.js Route |
|--------------|----------|-------------|---------------|
| `/` | `index.php` | Homepage with hero slider, featured projects, EMI calculator | `/` |
| `/about` | `about.php` | About us page | `/about` |
| `/contact` | `contact.php` | Contact form with lead capture | `/contact` |
| `/projects-search` | `projects-search.php` | Projects listing with filters | `/projects` |
| `/amenities` | `amenities.php` | Amenities showcase | `/amenities` |
| `/connectivity` | `connectivity.php` | Connectivity map & projects | `/connectivity` |
| `/[slug]` | `projects.php` | Dynamic project detail pages | `/projects/[slug]` |
| `/thankyou` | `thankyou.html` | Thank you page after form submission | `/thank-you` |

### Proposed Admin Routes (New)

| Route | Description |
|-------|-------------|
| `/admin` | Admin dashboard home |
| `/admin/login` | Admin authentication |
| `/admin/projects` | Project management (CRUD) |
| `/admin/projects/[id]` | Edit individual project |
| `/admin/projects/new` | Create new project |
| `/admin/leads` | Lead/inquiry management |
| `/admin/analytics` | Website analytics dashboard |
| `/admin/settings` | Site settings |

---

## 3. Data Models & Database Schema

### 3.1 Projects Schema
Based on API response structure:

```typescript
interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  price: string;
  
  // Hero Section
  hero: {
    image: string;
    heading: string;
    subText: string;
    possession: string;
  };
  
  // About Section
  about: {
    title: string;
    content: string;
    image: string;
  };
  
  // Property Details
  landSize: string;
  propertyType: string;
  configuration: string; // "2/3/4 BHK"
  status: string; // "Ready to Move" | "Under Construction"
  occupancy: number; // Percentage
  possessionDate: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  
  // Media
  gallery: Array<{
    url: string;
    alt: string;
  }>;
  
  // Amenities
  amenities: string[];
  
  // Additional
  highlights: string[];
  badge: string;
  badgeColor: string;
  
  // Location Details
  city: string;
  state: string;
  pincode: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### 3.2 Leads/Inquiries Schema

```typescript
interface Lead {
  id: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  
  // Source Tracking
  source: string; // Page where form was submitted
  projectInterest?: string; // If from project page
  
  // Status
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  
  // Anti-spam
  ipAddress: string;
  userAgent: string;
  formToken: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}
```

### 3.3 Admin Users Schema

```typescript
interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: 'admin' | 'editor';
  lastLogin: Date;
  createdAt: Date;
}
```

---

## 4. Core Features & Functions

### 4.1 Homepage Features

1. **Hero Slider**
   - 3 slides with background images
   - Auto-rotate every 5 seconds
   - CTA buttons: "View Project" & "View Floor Plans"

2. **Featured Projects Grid**
   - 28+ projects displayed
   - Project cards with:
     - Image with hover zoom
     - Badge (status)
     - Name, location, price
     - Occupancy progress circle (SVG)
   - Client-side filtering:
     - Project name search (autocomplete)
     - Location/sector filter
     - Budget range filter

3. **EMI Calculator Popup**
   - Loan amount input
   - Interest rate input
   - Tenure input
   - Calculate button
   - Result display

4. **Quick Links Section**
   - 3BHK filters
   - Affordable housing links
   - Trending projects

### 4.2 Project Detail Page Features

1. **Dynamic Content from API**
   - Fetches project by slug
   - 404 redirect if not found

2. **Hero Section**
   - Full-width background image
   - Project name, tagline
   - Key stats: Land Area, Possession, Price

3. **About Section**
   - Image + text content
   - CTA button

4. **Amenities Grid**
   - Icons with labels
   - Organized by category

5. **Gallery**
   - Lightbox functionality (GLightbox)
   - 6 images grid

6. **Floor Plans**
   - Unit types display
   - Size specifications

7. **Contact Form**
   - Same as global contact form
   - Pre-filled project interest

8. **JSON-LD Schema**
   - ApartmentComplex schema
   - Full address details

### 4.3 Contact Form System

**Multi-layer Spam Protection:**

1. **Client-side Validation**
   - Name: 2-50 chars, letters only
   - Phone: 10 digits, starts with 6-9
   - Email: Optional, valid format
   - Spam keyword detection

2. **Honeypot Field**
   - Hidden `website_url` field
   - Bots fill it, humans don't

3. **Time-based Check**
   - Form load time recorded
   - Min 3 seconds to submit
   - Max 1 hour (stale tokens)

4. **CSRF Token**
   - Session-based form token
   - Validated on submission

5. **Rate Limiting**
   - Max 3 attempts per 10 minutes
   - IP-based tracking

6. **reCAPTCHA Integration**
   - Triggered after 3 submissions
   - Google reCAPTCHA v2

7. **IP Security**
   - Spam attempts tracking
   - 24-hour IP blocking
   - JSON file storage

**Email Notifications:**
- Admin notification email (HTML template)
- User confirmation email (optional)
- Multiple admin recipients support

### 4.4 Projects Search Page

1. **Search Filters**
   - Project name with autocomplete
   - Location/sector search
   - Budget range dropdown

2. **Sort Options**
   - Price: Low to High
   - Price: High to Low
   - New Launch
   - Possession Date

3. **Results Display**
   - Grid layout (3 columns)
   - Project cards with details
   - Occupancy indicator
   - CTA to view details

4. **Empty State**
   - Message when no results
   - Reset filters button

### 4.5 About Page

- Hero with gradient background
- Company story section
- Why Choose Us (4 cards)
- Core Values (4 items)
- Expertise section
- CTA section

### 4.6 Amenities Page

- Hero banner
- Lifestyle & Recreation grid
- Health & Wellness section
- Safety & Convenience grid
- Community benefits

### 4.7 Connectivity Page

- Hero banner
- Interactive map image
- Projects with connectivity info
- Quick navigation links
- CTA section

---

## 5. Shared Components

### 5.1 Header (`inc/header.php`)
- Fixed position, blur background
- Logo (left)
- Desktop navigation (center)
- CTA button (right)
- Mobile hamburger menu
- Routes: Home, Projects, Connectivity, Amenities, Contact, About

### 5.2 Footer (`inc/footer.php`)
- 4-column layout
- Company info & social links
- Navigation links
- Contact information
- EMI Calculator button
- Disclaimer toggle
- Copyright

### 5.3 Global Popup Form
- Slide-in form
- Name, Email, Phone, Address fields
- Same validation as contact form

### 5.4 Floating Action Buttons
- WhatsApp chat button (green)
- Phone call button (primary)
- Animated with hover effects

### 5.5 EMI Calculator Popup
- Modal overlay
- Loan calculation logic
- Result display

---

## 6. Design System

### 6.1 Color Palette
```css
--primary: #f14201        /* Orange - Brand color */
--dark: #111111           /* Near black - Text/backgrounds */
--dark-secondary: #0a0a0a /* Darker variant */
--light-grey: #f4f4f4     /* Light backgrounds */
--border-grey: #e5e7eb    /* Borders */
--white: #ffffff          /* White */
```

### 6.2 Typography
```css
/* Headings */
font-family: 'Outfit', sans-serif;

/* Body */
font-family: 'DM Sans', sans-serif;

/* Alternate Headings */
font-family: 'Plus Jakarta Sans', sans-serif;
font-family: 'Teko', sans-serif;
```

### 6.3 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 7. API Endpoints

### 7.1 External Backend API

**Base URL:** `https://dwarkaexpresswayncr-backend.onrender.com/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | List all projects |
| GET | `/projects/{slug}` | Get single project |

### 7.2 Next.js API Routes (To Create)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| POST | `/api/verify-recaptcha` | Verify reCAPTCHA token |
| GET | `/api/projects` | Proxy to external API |
| GET | `/api/projects/[slug]` | Proxy single project |

### 7.3 Admin API Routes (To Create)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Admin authentication |
| POST | `/api/admin/logout` | Admin logout |
| GET | `/api/admin/projects` | List projects (admin) |
| POST | `/api/admin/projects` | Create project |
| PUT | `/api/admin/projects/[id]` | Update project |
| DELETE | `/api/admin/projects/[id]` | Delete project |
| GET | `/api/admin/leads` | List leads |
| PUT | `/api/admin/leads/[id]` | Update lead status |
| DELETE | `/api/admin/leads/[id]` | Delete lead |

---

## 8. Environment Variables

### 8.1 Required Variables
```env
# Database (Supabase recommended)
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
ADMIN_EMAIL=info@dwarkaexpresswayncr.com
ADDITIONAL_ADMIN_EMAILS=

# reCAPTCHA
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET=

# External API
BACKEND_API_URL=https://dwarkaexpresswayncr-backend.onrender.com/api

# Analytics
NEXT_PUBLIC_GA_ID=G-SWHJZTSNDT

# Admin Auth
ADMIN_JWT_SECRET=
```

---

## 9. Next.js Project Structure

```
dwarka-expressway-nextjs/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/page.tsx           # About page
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── projects/
│   │   │   ├── page.tsx             # Projects listing
│   │   │   └── [slug]/page.tsx      # Project detail
│   │   ├── amenities/page.tsx       # Amenities page
│   │   ├── connectivity/page.tsx    # Connectivity page
│   │   └── thank-you/page.tsx       # Thank you page
│   │
│   ├── admin/
│   │   ├── layout.tsx               # Admin layout with auth
│   │   ├── page.tsx                 # Dashboard
│   │   ├── login/page.tsx           # Admin login
│   │   ├── projects/
│   │   │   ├── page.tsx             # Projects list
│   │   │   ├── new/page.tsx         # Create project
│   │   │   └── [id]/page.tsx        # Edit project
│   │   ├── leads/page.tsx           # Leads management
│   │   ├── analytics/page.tsx       # Analytics
│   │   └── settings/page.tsx        # Settings
│   │
│   ├── api/
│   │   ├── contact/route.ts         # Contact form API
│   │   ├── verify-recaptcha/route.ts
│   │   ├── projects/
│   │   │   ├── route.ts             # List projects
│   │   │   └── [slug]/route.ts      # Single project
│   │   └── admin/
│   │       ├── auth/route.ts        # Auth endpoints
│   │       ├── projects/route.ts    # Admin projects CRUD
│   │       └── leads/route.ts       # Leads CRUD
│   │
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── not-found.tsx                # 404 page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilters.tsx
│   │   ├── QuickLinks.tsx
│   │   └── EMICalculator.tsx
│   │
│   ├── project/
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectAbout.tsx
│   │   ├── ProjectAmenities.tsx
│   │   ├── ProjectGallery.tsx
│   │   └── ProjectFloorPlans.tsx
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── PopupForm.tsx
│   │   └── FormValidation.ts
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── OccupancyCircle.tsx
│   │
│   ├── shared/
│   │   ├── FloatingButtons.tsx
│   │   ├── EMIPopup.tsx
│   │   └── SEOHead.tsx
│   │
│   └── admin/
│       ├── Sidebar.tsx
│       ├── DashboardStats.tsx
│       ├── ProjectsTable.tsx
│       ├── LeadsTable.tsx
│       ├── ProjectForm.tsx
│       └── LeadDetails.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── admin.ts
│   │
│   ├── api/
│   │   ├── projects.ts              # Project API functions
│   │   ├── leads.ts                 # Leads API functions
│   │   └── email.ts                 # Email sending
│   │
│   ├── utils/
│   │   ├── validation.ts            # Form validation
│   │   ├── spam-detection.ts        # Spam detection
│   │   ├── rate-limit.ts            # Rate limiting
│   │   └── formatters.ts            # Price, date formatters
│   │
│   └── constants/
│       ├── projects-data.ts         # Fallback project data
│       └── amenities.ts             # Amenities list
│
├── hooks/
│   ├── useProjects.ts               # SWR hook for projects
│   ├── useLeads.ts                  # SWR hook for leads
│   └── useAuth.ts                   # Admin auth hook
│
├── types/
│   ├── project.ts                   # Project types
│   ├── lead.ts                      # Lead types
│   └── admin.ts                     # Admin types
│
├── public/
│   └── images/
│       ├── logo.png
│       ├── favicon.png
│       ├── og-image.png
│       ├── banners/
│       ├── projects/
│       └── amenities/
│
├── styles/
│   └── tailwind.css                 # Tailwind config
│
├── middleware.ts                    # Auth middleware
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Admin Dashboard Features

### 10.1 Dashboard Home
- Total projects count
- Total leads count (with status breakdown)
- Recent leads list
- Quick actions

### 10.2 Projects Management
- List all projects with search/filter
- Create new project with form
- Edit existing project
- Delete project (with confirmation)
- Image upload for hero/gallery
- Preview project before publish

### 10.3 Leads Management
- List all leads with filters
- Status: New, Contacted, Qualified, Converted, Closed
- Search by name/phone/email
- View lead details
- Update lead status
- Add notes
- Export to CSV

### 10.4 Settings
- Admin profile
- Email settings
- Site settings (logo, contact info)
- reCAPTCHA configuration

---

## 11. Migration Checklist

### Phase 1: Setup & Foundation
- [ ] Initialize Next.js 16 project
- [ ] Configure Tailwind CSS with existing design tokens
- [ ] Set up Supabase integration
- [ ] Create database schema
- [ ] Configure environment variables

### Phase 2: Core Components
- [ ] Migrate Header component
- [ ] Migrate Footer component
- [ ] Create UI components library
- [ ] Implement EMI Calculator
- [ ] Create floating action buttons

### Phase 3: Public Pages
- [ ] Homepage with all sections
- [ ] Projects listing page
- [ ] Project detail dynamic page
- [ ] About page
- [ ] Contact page
- [ ] Amenities page
- [ ] Connectivity page
- [ ] Thank you page
- [ ] 404 page

### Phase 4: Forms & API
- [ ] Contact form with validation
- [ ] Popup form
- [ ] Email API endpoint
- [ ] reCAPTCHA integration
- [ ] Rate limiting
- [ ] Spam detection

### Phase 5: Admin Dashboard
- [ ] Admin authentication
- [ ] Dashboard home
- [ ] Projects CRUD
- [ ] Leads management
- [ ] Settings page

### Phase 6: Testing & Launch
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] SEO verification
- [ ] Performance optimization
- [ ] Analytics setup
- [ ] Deployment to Vercel

---

## 12. Notes for Backend Integration

The current system fetches project data from an external backend API:
`https://dwarkaexpresswayncr-backend.onrender.com/api/projects`

**Options:**
1. **Continue using external API** - Proxy through Next.js API routes
2. **Migrate to Supabase** - Full database migration
3. **Hybrid** - Use Supabase for leads/admin, external API for projects

**Recommendation:** Start with hybrid approach, migrate projects later if needed.

---

## 13. Next Steps

1. Please provide the backend API documentation or access
2. Confirm database preference (Supabase recommended)
3. Confirm admin dashboard requirements
4. Review and approve this analysis document
5. Begin Next.js migration

---

*Document Version: 1.0*
*Created: May 5, 2026*
*For: Dwarka Expressway NCR Migration Project*
