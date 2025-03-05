import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ padding: "20px", border: "1px solid #ccc", textAlign: "center" }}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "5px" }}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button>Login</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
