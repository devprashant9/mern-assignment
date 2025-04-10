import React from "react";

const JobItem = ({ job, updateJobStatus, deleteJobApplication }) => {
  const statusBadgeColor = {
    Applied: "bg-yellow-100 text-yellow-700",
    Interview: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <li className="w-full md:w-[48%] bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md rounded-2xl p-6 transition-all hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-900 tracking-wide mb-2">
          {job.company}
        </h3>
        <p className="text-lg text-gray-700 mb-1">
          <span className="font-semibold text-gray-800">Role:</span> {job.role}
        </p>
        <p className="text-sm flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-800">Status:</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              statusBadgeColor[job.status] || "bg-gray-200 text-gray-700"
            }`}
          >
            {job.status}
          </span>
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold text-gray-800">Applied on:</span>{" "}
          {job.dateOfApplication}
        </p>
        <p className="text-sm text-gray-600 break-words">
          <span className="font-semibold text-gray-800">Application Link:</span>{" "}
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            {job.link}
          </a>
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-between gap-3">
        <button
          onClick={() =>
            updateJobStatus(
              job._id,
              job.status === "Applied" ? "Interview" : "Applied"
            )
          }
          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300"
        >
          🔁 Update Status
        </button>
        <button
          onClick={() => deleteJobApplication(job._id)}
          className="flex-1 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition duration-300"
        >
          ❌ Delete
        </button>
      </div>
    </li>
  );
};

export default JobItem;
