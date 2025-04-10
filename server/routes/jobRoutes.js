import express from "express";
import { createJob, deleteJob, getAllJobs, updateJobStatus} from "../controllers/jobControllers.js";

const router = express.Router();

// Route to create job
router.post("/", createJob);

// Route to get all job
router.get("/", getAllJobs);

// Route to update a job
router.patch("/:id", updateJobStatus);

// Route to delete a job
router.delete("/:id", deleteJob);



export default router;


