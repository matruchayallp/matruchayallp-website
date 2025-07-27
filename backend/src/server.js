import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import applyRoutes from './routes/apply.js';
import authRoutes from './routes/auth.js';
import statusRoutes from './routes/status.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/contact', contactRoutes);
app.use('/api/apply', applyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/status', statusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 