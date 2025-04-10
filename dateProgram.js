const obj = [
  {
    company: "Google",
    role: "SDE Intern",
    appliedDate: "2025-04-01", // Normal valid date
  },
  {
    company: "Amazon",
    role: "Backend Intern",
    appliedDate: "2025-02-29", // Leap year valid date
  },
  {
    company: "Microsoft",
    role: "Frontend Intern",
    appliedDate: "Invalid-Date", // Invalid string
  },
  {
    company: "Netflix",
    role: "ML Intern",
    appliedDate: "2024-12-31", // Previous year date
  },
  {
    company: "Adobe",
    role: "UI/UX Intern",
    appliedDate: "2025/04/03", // Slash format (can be parsed by Date, but not standard ISO)
  },
  {
    company: "Meta",
    role: "Full Stack Intern",
    appliedDate: "", // Empty string
  },
  {
    company: "Spotify",
    role: "DevOps Intern",
    appliedDate: null, // null value
  },
  {
    company: "Tesla",
    role: "Embedded Intern",
    appliedDate: "2025-04-10T10:00:00", // ISO with time
  },
  {
    company: "Apple",
    role: "Cloud Intern",
    appliedDate: "2025-13-01", // Invalid month
  },
  {
    company: "Uber",
    role: "AI Intern",
    appliedDate: "2025-04-01", // Duplicate date
  },
];

  
  const data = obj.sort((a, b) => {
    const dateA = new Date(a.appliedDate);
    const dateB = new Date(b.appliedDate);
    return dateB - dateA; // Descending
  });
  
  console.log(obj);   // Sorted in-place  