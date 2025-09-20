import userModel from "../models/userModel.js";
import imageModel from "../models/imageModel.js"; // ✅ create this model
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // ✅ Stable Diffusion API
    const { data } = await axios.post( "https://modelslab.com/api/v6/realtime/text2img", {
      key: "a8uhTCCHgcW5rv2UVjAnE7xJiVDhB86l4HR7ZGiIOFjPbMpegLqXVUWHgBqn",
      prompt,
      width: 512,
      height: 512,
      samples: 1,
      num_inference_steps: 20,
    });

    const resultImage = data.output[0];

    // Deduct credits
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

    // ✅ Save to DB collection "images"
    const newImage = new imageModel({
      userId: user._id,
      prompt,
      imageUrl: resultImage,
    });
    await newImage.save();

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
