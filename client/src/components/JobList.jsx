import React, { useState } from "react";
import JobItem from "./JobItem";
import { Link } from "react-router";
import Filter from "./Filter";

const JobList = ({ applications, updateJobStatus, deleteJobApplication, setFilter }) => {
  const [showFilter, setShowFilter] = useState(true);

  const filterHandler = () => {
    setShowFilter((prev) => !prev);
  };


  return (
    <div className="mb-4">
      <div className="max-w-md my-2 px-6 shadow-md rounded-xl flex gap-8">
        <Link to="/">
          <button
            className="max-w-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={() => history.back()}
          >
            Back
          </button>
        </Link>

        {showFilter ? (
          <button
            className="max-w-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={filterHandler}
          >
            Show Filter
          </button>
        ) : (
          <button
            className="max-w-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={filterHandler}
          >
            Hide Filter
          </button>
        )}
      </div>
      {
        showFilter ?  null : <Filter setFilter={setFilter} />
      }
      {applications.length === 0 ? (
        <p>No job applications added yet!</p>
      ) : (
        <ul>
          {applications.map((job) => (
            <JobItem
              key={job._id}
              job={job}
              updateJobStatus={updateJobStatus}
              deleteJobApplication={deleteJobApplication}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
