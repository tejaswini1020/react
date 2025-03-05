import React from "react";
import { useParams, Link } from "react-router-dom";

const doctors = {
  1: { name: "Dr.ABC", specialty: "Cardiologist", experience: "10 years" },
  2: { name: "Dr.DEF", specialty: "Dermatologist", experience: "8 years" },
};

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors[id];

  if (!doctor) return <h2>Doctor Not Found</h2>;

  return (
    <div className="container">
      <h2>{doctor.name}</h2>
      <p>Specialty: {doctor.specialty}</p>
      <p>Experience: {doctor.experience}</p>
      <Link to="/appointment">Book an Appointment</Link>
    </div>
  );
}

export default DoctorProfile;
