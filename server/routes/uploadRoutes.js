import express from "express";
import multer from "multer";
import tinify from "tinify"; 
import { compressImage, convertImage } from "../controllers/uploads.controller.js";

const router = express.Router();

// Configure Multer storage options
const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage });

// Set TinyPNG API key
console.log(process.env.tinify_key);

tinify.key = process.env.tinify_key;

// Routes
router.post("/compress-image", upload.single("file"), compressImage);
router.post("/convertImage/:format", upload.single("file"), convertImage); 

export default router;
