import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// 1️⃣ Define what a "User" looks like
const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"] 
    },
    email: { 
      type: String, 
      required: [true, "Email is required"], 
      unique: true 
    },
    password: { 
      type: String, 
      required: [true, "Password is required"] 
    },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

// 2️⃣ Encrypt (hash) the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 3️⃣ Export the model
export default mongoose.model("User", userSchema);
