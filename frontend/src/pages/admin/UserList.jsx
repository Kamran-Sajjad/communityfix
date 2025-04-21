// src/pages/admin/UserList.jsx
import React from 'react';
import users from "../../hooks/data.json"; // Correct path to data.json
import UserCard from "../../components/Dashboard/UserCard"; // Correct path to UserCard.jsx


function UserList() {
  return (
    <main className="user-list-container">

      <div className="user-list-grid">
        {users.map((user) => (
          <UserCard key={user.cnic} user={user} /> // Use a unique key
        ))}
      </div>
    </main>
    
  );

}

export default UserList;