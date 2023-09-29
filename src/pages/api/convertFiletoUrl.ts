// pages/api/upload.js

import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

// Create a multer storage instance
const storage = multer.diskStorage({
  destination: 'public/uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, uuidv4() + uniqueSuffix + extension);
  },
});

// Create multer upload instance
const upload = multer({ storage });

export default async (req, res) => {
  try {
    // Use the upload middleware to handle the file upload
    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error uploading file' });
      }

      // The uploaded file details are available in req.file
      const { filename } = req.file;

      // You can create a public URL to access the uploaded file
      const publicURL = `/uploads/${filename}`;

      // Here, you might want to save the publicURL to a database for future reference

      res.status(200).json({ url: publicURL });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
