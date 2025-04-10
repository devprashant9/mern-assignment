import React from 'react';

const JobItem = ({ job, updateJobStatus, deleteJobApplication }) => {
  return (
    <li className="p-4 mb-2 border border-gray-300 rounded flex justify-between items-center">
      <div>
        <h3 className="text-lg">{job.company}</h3>
        <p>{job.role}</p>
        <p>Status: {job.status}</p>
        <p>Date: {job.dateOfApplication}</p>
        <p>Link: <a href={job.link} target="_blank" rel="noopener noreferrer">{job.link}</a></p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => updateJobStatus(job._id, job.status === 'Applied' ? 'Interview' : 'Applied')}
          className="p-2 bg-yellow-500 text-white rounded"
        >
          Update Status
        </button>
        <button
          onClick={() => deleteJobApplication(job._id)}
          className="p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default JobItem;
