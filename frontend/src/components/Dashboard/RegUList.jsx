// src/pages/admin/UserList.jsx
import React from 'react';
import users from "../../hooks/data.json"; // Correct path to data.json
import UserCard from "../../components/Dashboard/UserCard"; // Correct path to UserCard.jsx

function RegUList() {
  return (
    <main className="user-list-container">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {users.map((user) => (
          <div key={user.cnic} className="break-inside-avoid mb-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default RegUList;