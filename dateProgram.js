const obj = [
  { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
  { company: "Amazon", role: "Backend Intern", appliedDate: "2025-02-29" },
  {
    company: "Microsoft",
    role: "Frontend Intern",
    appliedDate: "Invalid-Date",
  },
  { company: "Netflix", role: "ML Intern", appliedDate: "2024-12-31" },
  { company: "Adobe", role: "UI/UX Intern", appliedDate: "2025/04/03" },
  { company: "Meta", role: "Full Stack Intern", appliedDate: "" },
  { company: "Spotify", role: "DevOps Intern", appliedDate: null },
  {
    company: "Tesla",
    role: "Embedded Intern",
    appliedDate: "2025-04-10T10:00:00",
  },
  { company: "Apple", role: "Cloud Intern", appliedDate: "2025-13-01" },
  { company: "Uber", role: "AI Intern", appliedDate: "2025-04-01" },
];

const data = obj.sort((a, b) => {
  const timeA = Date.parse(a.appliedDate);
  const timeB = Date.parse(b.appliedDate);
  // console.log(timeA);
  // console.log(timeB);

  const isValidA = !isNaN(timeA);
  const isValidB = !isNaN(timeB);

  if (isValidA && isValidB) {
    return timeB - timeA; // Sort descending if both dates are valid
  } else if (isValidA) {
    return -1; // A is valid, B is invalid => A comes first
  } else if (isValidB) {
    return 1; // B is valid, A is invalid => B comes first
  } else {
    return 0; // Both invalid => maintain relative order
  }
});

console.log(data);
