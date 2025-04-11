import React, {useState } from "react";
import { createJob } from "../services/jobService";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";

const AddJobForm = ({addJobApplication}) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateOfApplication, setDateOfApplication] = useState("");
  const [link, setLink] = useState("");

  const notify = () => toast.success("Job Added Successfully!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newJob = {
      company,
      role,
      status,
      dateOfApplication,
      link,
    };
    addJobApplication(newJob);

    const response = await createJob(newJob);
    if (!response?.message) {
      notify(); // Show toast only on success
      // Optionally clear the form:
      setCompany("");
      setRole("");
      setStatus("Applied");
      setDateOfApplication("");
      setLink("");
    } else if (response?.message) {
      toast.error(response.message);
    }
  };

  

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 p-6 bg-white shadow-md rounded-xl border border-gray-200"
      >
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="date"
          value={dateOfApplication}
          onChange={(e) => setDateOfApplication(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="url"
          placeholder="Job Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Add Job
        </button>
      </form>

      <div className="w-full max-w-md my-2 px-6 shadow-md rounded-xl">
        <Link to="/getAllJobs">
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 cursor-pointer">
            View All Jobs
          </button>
        </Link>
      </div>

      {/* Toast container should be included here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddJobForm;
