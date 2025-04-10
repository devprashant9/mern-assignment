const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createJob = async (jobData) => {
  const response = await fetch(`${API_URL}/api/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  const data = await response.json();
  return data;
};

export const getAllJobs = async () => {
  const response = await fetch(`${API_URL}/api/jobs`);
  const data = await response.json();
  return data;
};

export const updateJobStatus = async (jobId, status) => {
  const response = await fetch(`${API_URL}/api/jobs/${jobId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();
  return data;
};

export const deleteJob = async (jobId) => {
  const response = await fetch(`${API_URL}/api/jobs/${jobId}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};
