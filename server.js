import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


dotenv.config();
connectDB(); // 👈 Connect to MongoDB

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, Task Manager API is running and connected to MongoDB!");
});

//Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
