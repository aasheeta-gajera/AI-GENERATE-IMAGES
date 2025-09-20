import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

// ✅ Correct way to prevent OverwriteModelError in Mongoose
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
