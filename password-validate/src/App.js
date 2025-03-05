import React, { useState } from "react";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
      alert("Password is valid!");
    }
  };

  return (
    <div>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} // No validation here
        placeholder="Enter password" 
      />
      <button onClick={validatePassword}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PasswordValidation;
