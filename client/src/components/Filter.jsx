import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-md border border-gray-200 mb-6">
      <div className="flex items-center mb-3 gap-2">
        <label className="text-gray-700 font-medium">Filter by Status</label>
      </div>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default Filter;
