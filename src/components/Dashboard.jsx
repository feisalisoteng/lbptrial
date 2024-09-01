// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import BarChart from './Barchart';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
    <div className="p-8 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dump Truck</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Excavator</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Wheel Loader</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dozer</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Washing Plant</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Jaw Crusher</h2>
          <div className="h-64">
                <BarChart /> {/* Render Chart component */}
              </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
