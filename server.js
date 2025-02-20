import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

console.log("Loaded API Key:", process.env.CLIPDROP_API);

const PORT = process.env.PORT || 5000; // create a port
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB before starting server
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  } catch (error) {
    console.error(" Error starting server:", error);
    process.exit(1); // Exit if DB connection fails
  }
};

// Start the server
startServer();
