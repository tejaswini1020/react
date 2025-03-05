import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  { id: 1, name: "Dr.ABC", specialty: "Cardiologist" },
  { id: 2, name: "Dr.DEF", specialty: "Dermatologist" },
];

function Home() {
  return (
    <div className="container">
      <h2>Available Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <Link to={`/doctor/${doctor.id}`}>
              {doctor.name} - {doctor.specialty}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
