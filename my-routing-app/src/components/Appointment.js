import React, { useState } from "react";

function Appointment() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = () => {
    if (name && date) {
      setConfirmation(`Appointment confirmed for ${name} on ${date}`);
    }
  };

  return (
    <div className="container">
      <h2>Book an Appointment</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSubmit}>Book</button>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
}

export default Appointment;
