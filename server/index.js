/********************************************** IMPORTS **************************************************/
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mongoose from 'mongoose';

import { verifyToken } from './middleware/auth.js';
import userRouter from './routes/user.routes.js'; // Import the user router
import authRouter from './routes/auth.js';
import connectDB from './mongodb/connect.js'; // MongoDB connection function

/****************************************** CONFIGURATIONS **********************************************/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Middleware configurations
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/******************************************** FILE STORAGE **********************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

/********************************************** ROUTES **************************************************/
app.use('/api', authRouter); // Use the user router for all user-related routes
app.use('/api/users', userRouter); // Use the user router for all user-related routes

/********************************************** ERROR HANDLING **********************************************/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

/********************************************** MONGO **************************************************/
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // Connect to MongoDB
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server started on port http://localhost:${process.env.PORT || 8080}`);
    });
  } catch (error) {
    console.log(`${error} did not connect`);
  }
};

startServer();
