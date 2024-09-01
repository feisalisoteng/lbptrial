// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Main Menu</div>
      <nav className="flex-1">
        <ul className="mt-6">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-700">
              Equipment
            </Link>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
      <footer className="p-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Team LBP V1.1
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Sidebar;
