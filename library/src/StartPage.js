import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <div className="welcome-box">
        <h1>Welcome to My Library!</h1>
        <p>Join us for a delightful experience! ✨</p>
        <div className="button-group">
          <button className="cute-btn login-btn" onClick={() => navigate("/login")}>
            Log In
          </button>
          <button className="cute-btn signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <button className="cute-btn admin-btn" onClick={() => navigate("/admin-login")}>
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
