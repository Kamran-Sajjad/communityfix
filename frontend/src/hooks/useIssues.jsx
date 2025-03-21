

// import { useState, useEffect } from "react";

// export function useIssues() {
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     // Fetch issues from an API or define them statically
//     const fetchedIssues = [
//       { id: 1, name: "Umer", address: "Streets 9 House 32", issue: "renovation", status: "pending" },
//       { id: 2, name: "Kamran", address: "Street 7 House 9", issue: "Pipe leaks", status: "completed" },
//       { id: 3, name: "ali", address: "Street 6 House 9", issue: "Pipe leak", status: "pending" },
//       { id: 4, name: "arslan", address: "Streets 9 House 32", issue: "renovation", status: "pending" },
//       { id: 5, name: "nizam", address: "Street 7 House 9", issue: "Pipe leaks", status: "completed" },
//       { id: 6, name: "hamza", address: "Street 6 House 9", issue: "Pipe leak", status: "pending" },
//       // Add more issues here
//     ];
//     setIssues(fetchedIssues);
//   }, []);

//   return { issues };
// }
import { useState, useEffect } from "react";

export default function useIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch issues from an API or define them statically
    const fetchedIssues = [
      { id: 1, name: "Umer", address: "Streets 9 House 32", issue: "renovation", status: "pending" },
      { id: 2, name: "Kamran", address: "Street 7 House 9", issue: "Pipe leaks", status: "completed" },
      { id: 3, name: "ali", address: "Street 6 House 9", issue: "Pipe leak", status: "pending" },
      { id: 4, name: "arslan fakhir", address: "Streets 9 House 32", issue: "renovation", status: "pending" },
      { id: 5, name: "nizam", address: "Street 7 House 9", issue: "Pipe leaks", status: "completed" },
      { id: 6, name: "hamza", address: "Street 6 House 9", issue: "Carpanter", status: "pending" },
      { id: 7, name: "sami", address: "Street 8 House 6", issue: "plumber", status: "pending" },
    ];
    setIssues(fetchedIssues);
    console.log("Fetched Issues:", fetchedIssues); // Debugging
  }, []);

  return { issues };
}