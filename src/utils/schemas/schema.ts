import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    emailOrPhone: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })

export const userChemaStr = mongoose.models.users || mongoose.model("users", userSchema)