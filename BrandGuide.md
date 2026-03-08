# RealtyVoice Brand & Strategy Guide

## 🎨 Design System (Authority-First)
RealtyVoice is designed to feel like a high-end, purpose-built tools for real estate elites. The aesthetic is "Premium Tech Authority."

### Brand Colors
- **Primary (Violet)**: `#7C3AED` - Represents innovation and AI intelligence. Used for main buttons and active states.
- **Accent (Gold)**: `#D4AF37` - Represents the high-value commissions ($20k+) and prestige. Used sparingly for highlights, star ratings, and badges.
- **Surface (Dark)**: `#0B0B12` - Deep, professional background. Avoids the "cheap" gray of generic templates.
- **Glassmorphism**: Border `rgba(255, 255, 255, 0.06)`, Blur `12px`.

### Authority Guidelines
- **Gradients**: Use gradients sparingly. Favor solid `#text-primary` for core messaging. Use gradients ONLY for high-impact keywords.
- **Typography**: Inter (Sans-serif). Bold weights (700-900) for headers to project confidence.
- **Glow Elements**: Use `.glow` utility for primary CTAs to create a "portal" effect that draws the eye.

## 🏗️ Site Structure
- **Home (`/`)**: High-impact problem/solution overview.
- **How It Works (`/how-it-works`)**: The 6-step setup blueprint. Focus on speed and low friction.
- **Pricing (`/pricing`)**: Focus on ROI and the high cost of *not* having the system. Comparisons to human receptionists.
- **Testimonials (`/testimonials`)**: Social proof from actual US market agents.
- **Blueprint Access (`/blueprint-access`)**: Technical authority piece for agents who want to understand the "Why."
- **Contact (`/contact-us`)**: Multi-channel support (Email, Phone, Form).

## 🔍 SEO & Conversion Strategy

### Keywords (Tier 1)
- Real Estate AI Receptionist
- Automated Lead Qualification for Realtors
- 24/7 Real Estate Assistant
- Missed Call Lead Capture
- Inbound Lead Conversion AI

### Technical SEO
- **Title Tags**: Always lead with "RealtyVoice AI" + high-intent keyword.
- **Meta Descriptions**: Focus on the "$20,000 commission" pain point and inbound missed calls.
- **H1 Consistency**: One H1 per page, clearly stating the value proposition.
- **Call to Action**: "Start Your 7-Day Free Trial" is the primary global CTA.

### Trust Factors (Social Proof)
- **Verified Standards**: Reference RE/MAX, Century 21, and KW as benchmarks we exceed in speed and capture.
- **Realistic Stats**: Focus on 100% Call Capture Rate. Avoid massive fake numbers; focus on quality of service.
- **Direct ROI**: Every page emphasizes that missed calls = lost $20k+ commission.

## 🛠️ Infrastructure
- **Framework**: Next.js (App Router)
- **Database**: Supabase (Tables: `leads`, `testimonials`, `blogs`)
- **Booking**: Cal.com integration via `@calcom/embed-react`
- **Voice Connectivity**: CRM sync via Google Sheets / Cal.com (Strictly for Inbound Flow)
