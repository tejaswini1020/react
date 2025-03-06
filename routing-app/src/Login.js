import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();  

    const handleLogin = () => {
        if (email && password) {  
            setIsLoggedIn(true);  
            navigate("/dashboard"); 
        } else {
            alert("Please enter both email and password!"); 
        }
    };

    return (
        <div className="container">
            <h2>Healthcare Login</h2>
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
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
