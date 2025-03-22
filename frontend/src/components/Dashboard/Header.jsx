import React from 'react';

const Header = ({ userName }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">Hello {userName}!</h1>
      <p>It's good to see you again.</p>
    </header>
  );
};

export default Header;