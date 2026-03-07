# RealtyVoice Project Guide

This document outlines the architecture, features, and internal access for the RealtyVoice platform.

## 🚀 Key Links & Pages
- **Home**: Main landing page with the Loom demo and ROI calculator hook.
- **[How it Works](/how-it-works)**: Simple 4-step setup guide.
- **[About](/about)**: Mission statement and team background.
- **[Demo](/demo)**: Live call recording placeholders. Update these with real `.mp3` or `.wav` files when ready.
- **[Contact Us](/contact-us)**: Dedicated contact form and office details.
- **[Internal Dashboard](/internal)**: Private admin portal for blog creation.

## 🔐 Internal Access (Admin)
The internal admin portal allows you to draft and manage blog posts using a markdown editor.

- **URL**: `/internal`
- **Username**: `realtyvoice`
- **Password**: `RealtyVoice@2026`

> [!NOTE]
> Currently, blog posts are stored in **Local Storage**. For production, you should connect this to a database (e.g., Supabase or MongoDB).

## 🎁 Special Features
### 1. Exit-Intent Popup
Triggered when the user moves their cursor towards the top of the browser window. Designed to capture emails with a "Freebie" guide.
- **Component**: `src/components/ExitIntentPopup.tsx`

### 2. Live Desk CTA
A prominent CTA in the Hero section allows users to test the AI by calling: **+1 (650) 252-4261**.

### 3. Loom Video Integration
Embedded Loom video on the home page (within the `Solution.tsx` component) to walk users through the VAPI setup.

## 🎨 Design System
- **Colors**: Violet/Blueish gradients.
- **Components**: Glassmorphism cards (`.glass`) and text gradients (`.text-gradient`).
- **Responsive Features**: Navbar and Feature grid adjust for mobile/tablet.

## 🛠️ Maintenance & Edits
- To update the Loom video, edit `src/components/Solution.tsx`.
- To update the phone number, edit `src/components/Hero.tsx` and `src/app/contact-us/page.tsx`.
- To fix linting errors, ensure all apostrophes are escaped as `&apos;` or `&ldquo;`/`&rdquo;`.

---
© 2026 RealtyVoice.
