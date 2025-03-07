import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);  
        navigate("/");  
    };

    return (
        <div className="container">
            <h2>Doctor Appointments</h2>
            <ul>
                <li>Doctor1 - 10:00 AM - Dr. Smith</li>
                <li>Doctor2 - 11:30 AM - Dr. Brown</li>
                <li>Doctor3 - 2:00 PM - Dr. Wilson</li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
