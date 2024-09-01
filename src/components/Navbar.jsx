// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-400 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">WKMD DOME</div>
      <div>
        <button className="bg-red-700 px-3 py-2 rounded hover:bg-red-200">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
