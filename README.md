# Matruchaya Consultancy LLP Website

A modern, responsive, and accessible website for Matruchaya Consultancy LLP, offering loan and background verification services. Built with React, Vite, and Tailwind CSS.

## Features
- Home page with hero, services, testimonials, and about sections
- Loan Services and Background Verification Services, each with detailed cards
- Contact form (Formspree integration)
- Apply Now form (Formspree integration, file upload supported)
- Admin/Track Portal (dummy login/data, ready for Supabase integration)
- Responsive design for mobile, tablet, and desktop
- Accessible forms and navigation
- Clean, corporate design system

## Getting Started (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Deployment

### Deploy to Vercel (Recommended)
1. [Sign up for Vercel](https://vercel.com/) and connect your GitHub repo.
2. Click "New Project" and import your repo.
3. Vercel auto-detects Vite. Just click "Deploy".
4. Your site will be live on a Vercel URL.

### Deploy to Netlify
1. [Sign up for Netlify](https://netlify.com/) and connect your GitHub repo.
2. Click "Add new site" > "Import an existing project".
3. Set build command: `npm run build` and publish directory: `dist`
4. Click "Deploy site".

### Deploy to Your Own Server
1. Build the site:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Serve the `dist/` folder with any static server (e.g., [serve](https://www.npmjs.com/package/serve))

## Environment Variables
- No environment variables are required for the default setup.
- For Supabase integration (Admin Portal), add your Supabase URL and anon/public key in a `.env` file and update the portal code.

## Admin/Track Portal
- Dummy login: `admin@matruchaya.com` / `admin123`
- Status search works with sample data.
- To enable real authentication and status tracking, integrate with [Supabase Auth](https://supabase.com/docs/guides/auth) and [Supabase Database](https://supabase.com/docs/guides/database).

## Accessibility & Responsiveness
- All forms have labels and visible focus states.
- Color contrast meets accessibility standards.
- Layouts are mobile/tablet/desktop friendly.

## Support
For questions or support, contact: matruchayaconsultanacy@gmail.com

---

**Built with ❤️ by the Matruchaya Consultancy LLP team.**
