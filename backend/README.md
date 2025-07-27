# Matruchaya Consultancy LLP Backend

A Node.js/Express backend for Matruchaya Consultancy LLP website, integrated with Supabase (database/auth) and Nodemailer (email notifications).

## Features
- REST API for contact and application forms
- File uploads (documents)
- Supabase Auth for admin login
- Application status tracking
- Email notifications on new submissions

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (see below).
3. Start the server:
   ```bash
   npm run dev
   ```

## Environment Variables
```
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_PROJECT_ID=your_supabase_project_id
EMAIL_HOST=smtp.example.com
EMAIL_PORT=465
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_FROM=your_email@example.com
```

## API Endpoints
| Endpoint           | Method | Description                        |
|--------------------|--------|------------------------------------|
| /api/contact       | POST   | Contact form submission            |
| /api/apply         | POST   | Loan/BGV application + file upload |
| /api/auth/login    | POST   | Admin login (Supabase Auth)        |
| /api/status/:id    | GET    | Get application status by ID       |
| /api/status        | GET    | List all applications (admin only) |

## Deployment
- Deploy to Render, Railway, or any Node.js host.
- Set all environment variables in your deployment dashboard.

---

**Built for Matruchaya Consultancy LLP.** 