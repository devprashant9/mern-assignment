import express from "express";
import connectDB from "./configs/db.js";
import config from "./configs/config.js";
import jobRoutes from "./routes/jobRoutes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";



// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());



// Sample route to test the server
app.get("/", (req, res) => {
  res.send("🚀 Job Application Tracker API is running...");
});

// Use job routes
app.use("/api/jobs", jobRoutes);

// custom middlewares
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(config.port, () => {
  console.log(`✅ Server is running on http://localhost:${config.port}`);
});
