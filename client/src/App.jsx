import React, { useState, useEffect } from "react";
import AddJobForm from "./components/AddJobForm";
import JobList from "./components/JobList";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("");

  // Fetch all job applications
  useEffect(() => {
    axios
      .get(`${API_URL}/api/jobs`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle adding new job application
  const addJobApplication = (newJob) => {
    setApplications([...applications, newJob]);
  };

  // Handle updating application status
  const updateJobStatus = (id, newStatus) => {
    axios
      .patch(`${API_URL}/api/jobs/${id}`, { status: newStatus })
      .then((res) => {
        const updatedApps = applications.map((app) =>
          app._id === id ? { ...app, status: newStatus } : app
        );
        setApplications(updatedApps);
      })
      .catch((err) => console.error(err));
  };

  // Handle deleting job application
  const deleteJobApplication = (id) => {
    axios
      .delete(`${API_URL}/api/jobs/${id}`)
      .then(() => setApplications(applications.filter((app) => app._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full h-screen p-4">
      <div className="w-full h-[4rem] text-center font-bold">
        <h1 className="text-2xl">Job Application Tracker</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AddJobForm addJobApplication={addJobApplication} />}
          />
          <Route
            path="/getAllJobs"
            element={
              <JobList
                applications={applications.filter((app) =>
                  filter ? app.status === filter : true
                )}
                updateJobStatus={updateJobStatus}
                deleteJobApplication={deleteJobApplication}
                setFilter={setFilter}
              />
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
