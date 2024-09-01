import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (username === 'adminlbp' && password === 'admin123') {
      // Save authentication status (e.g., using context or localStorage)
        window.location.href = '/dashboard';
      } else {
        alert('Username atau Password Salah');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <div className="flex justify-center mb-6">
          <img
            src="/AntamLogo.png" // Ensure this path is correct
            alt="Antam logo"
            className="h-16" // Use a valid Tailwind class or define your custom class
          />
        </div>
        <h2 className="flex justify-center text-2xl font-bold mb-4">WKMD DOME</h2>
        <p className="text-lg text-black">Login</p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <h2 className="flex justify-center text-lg font-bold mt-8">Team LBP V1.1</h2>
        </form>
      </div>
    </div>
  );
}

export default Login;
