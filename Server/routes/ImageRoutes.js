import express from 'express'
import { generateImage } from '../Controllers/imageController.js'
import userAuth from '../middlewares/auth.js'
import imageModel from "../models/imageModel.js";

const imageRouter = express.Router()

imageRouter.post('/generate-image' , userAuth ,generateImage)

imageRouter.post("/save", async (req, res) => {
  try {
    const { userId, prompt, imageUrl } = req.body;
    if (!userId || !imageUrl) return res.json({ success: false, message: "Missing fields" });

    const img = new imageModel({ userId, prompt, imageUrl });
    await img.save();

    res.json({ success: true, message: "Image saved to DB" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

export default imageRouter
