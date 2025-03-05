import React, { useState } from "react";
import "./style.css"; // Import the CSS file

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        {passwordError && <p className="error">{passwordError}</p>}
        <button>Login</button>
      </div>
    </div>
  );
};

export default App;
