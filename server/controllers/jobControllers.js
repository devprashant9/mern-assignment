import Job from "../models/jobApplications.models.js";

// @desc    Create a new job application
// @route   POST /api/jobs
// @access  Public (for now)
export const createJob = async (req, res) => {
  try {
    const { company, role, status, dateOfApplication, link } = req.body;

    if (!company || !role) {
      return res
        .status(400)
        .json({ message: "Company and Role are required." });
    }

    const newJob = new Job({
      company,
      role,
      status,
      dateOfApplication,
      link,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create job", error: error.message });
  }
};

// @desc    Get all job applications (with optional filtering)
// @route   GET /api/jobs
// @access  Public (for now)
export const getAllJobs = async (req, res) => {
  try {
    const { status, date } = req.query;

    // Build query object
    let query = {};

    if (status) {
      query.status = status;
    }

    if (date) {
      query.dateOfApplication = { $gte: new Date(date) };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    // Format dateOfApplication to remove time
    const formattedJobs = jobs.map((job) => {
      const jobObj = job.toObject();
      jobObj.dateOfApplication = jobObj.dateOfApplication
        ? jobObj.dateOfApplication.toISOString().split("T")[0]
        : "";
      return jobObj;
    });

    res.status(200).json(formattedJobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch jobs", error: error.message });
  }
};


// @desc    Update job status by ID
// @route   PATCH /api/jobs/:id
// @access  Public (for now)
export const updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { status },
      { new: true } // return updated document
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update status", error: error.message });
  }
};

// @desc    Delete job by ID
// @route   DELETE /api/jobs/:id
// @access  Public (for now)
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete job", error: error.message });
  }
};
