import express from 'express';
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('document'), async (req, res) => {
  const { name, email, phone, loanType, message } = req.body;
  const file = req.file;
  if (!name || !email || !phone || !loanType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    let fileUrl = null;
    if (file) {
      fileUrl = `/uploads/${file.filename}`;
    }
    // Save to Supabase
    const { data, error } = await supabase.from('applications').insert([
      { name, email, phone, loan_type: loanType, message, document_url: fileUrl }
    ]);
    if (error) throw error;
    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: 'New Application Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLoan/BGV Type: ${loanType}\nMessage: ${message}\nDocument: ${fileUrl || 'None'}`,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router; 