
// // src/pages/admin/UserList.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UserCard from "../../components/Dashboard/UserCard";

// function UserList() {
//   const [users, setUsers] = useState([]);

//   // Fetch users from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/admin/users")
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//       });
//   }, []);

//   // Handle Accept/Reject and update UI
//   const handleAction = (userId, action) => {
//     const endpoint =
//       action === "accept"
//         ? "http://localhost:5000/api/users/accept"
//         : "http://localhost:5000/api/users/reject";

//     axios.post(endpoint, { userId })
//       .then((res) => {
//         // Remove user from list after action
//         setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
//       })
//       .catch((err) => {
//         console.error(`Error on ${action}:`, err);
//       });
//   };

//   return (
//     <main className="user-list-container">
//       <div className="user-list-grid">
//         {users.map((user) => (
//           <UserCard
//             key={user._id}
//             user={user}
//             onAccept={() => handleAction(user._id, "accept")}
//             onReject={() => handleAction(user._id, "reject")}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }

// export default UserList;










// Updated UserList.jsx with Suspend/Deactivate and Filter
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/Dashboard/UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [accountTypeFilter, setAccountTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  const handleAction = (userId, action) => {
    const endpoint = `http://localhost:5000/api/users/${action}`;

    axios.post(endpoint, { userId })
      .then(() => {
        setUsers(prev =>
          prev.map(user =>
            user._id === userId ? { ...user, status: action } : user
          )
        );
      })
      .catch(err => console.error(`Error on ${action}:`, err));
  };

  const filteredUsers = users.filter(user => {
    const matchAccountType = accountTypeFilter === "all" || user.accountType === accountTypeFilter;
    const matchStatus = statusFilter === "all" || user.status === statusFilter;
    return matchAccountType && matchStatus;
  });

  return (
    <main className="user-list-container">
      <div className="flex justify-end mb-4 space-x-4">
        <select
          className="border px-3 py-2 rounded-md text-sm"
          value={accountTypeFilter}
          onChange={(e) => setAccountTypeFilter(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="resident">Resident</option>
          <option value="serviceTeam">Service Team</option>
        </select>

        <select
          className="border px-3 py-2 rounded-md text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
          <option value="deactivated">Deactivated</option>
        </select>
      </div>

      <div className="user-list-grid">
        {filteredUsers.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onSuspend={() => handleAction(user._id, "suspended")}
            onDeactivate={() => handleAction(user._id, "deactivated")}
            onActivate={() => handleAction(user._id, "active")}
          />
        ))}
      </div>
    </main>
  );
}

export default UserList;
