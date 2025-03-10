import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className="container">
      <h2>Welcome to the Dashboard!</h2>
      <p>You have successfully logged in.</p>
      <p>Welcome to retail app!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
