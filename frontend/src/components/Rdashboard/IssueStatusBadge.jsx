export default function IssueStatusBadge({ status }) {
    const statusColors = {
      open: "bg-green-100 text-green-800",
      in_progress: "bg-blue-100 text-blue-800",
      resolved: "bg-purple-100 text-purple-800",
      closed: "bg-gray-100 text-gray-800"
    };
  
    const statusText = {
      open: "Open",
      in_progress: "In Progress",
      resolved: "Resolved",
      closed: "Closed"
    };
  
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
        {statusText[status]}
      </span>
    );
  }