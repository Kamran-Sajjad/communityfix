// // src/pages/admin/UserList.jsx
// import React from 'react';
// import users from "../../hooks/data.json"; // Correct path to data.json
// import UserCard from "../../components/Dashboard/UserCard"; // Correct path to UserCard.jsx
// // import AdSideBare from '../../components/Dashboard/AdSideBare';


// function UserList() {
//   return (
//     <main className="user-list-container">

//       <div className="user-list-grid">
//         {users.map((user) => (
//           <UserCard key={user.cnic} user={user} /> // Use a unique key
//         ))}
//       </div>
//     </main>
    
//   );

// }

// export default UserList;





// src/pages/admin/UserList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/Dashboard/UserCard";

function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  // Handle Accept/Reject and update UI
  const handleAction = (userId, action) => {
    const endpoint =
      action === "accept"
        ? "http://localhost:5000/api/users/accept"
        : "http://localhost:5000/api/users/reject";

    axios.post(endpoint, { userId })
      .then((res) => {
        // Remove user from list after action
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      })
      .catch((err) => {
        console.error(`Error on ${action}:`, err);
      });
  };

  return (
    <main className="user-list-container">
      <div className="user-list-grid">
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onAccept={() => handleAction(user._id, "accept")}
            onReject={() => handleAction(user._id, "reject")}
          />
        ))}
      </div>
    </main>
  );
}

export default UserList;
