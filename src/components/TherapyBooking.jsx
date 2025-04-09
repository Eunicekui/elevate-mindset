import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TherapyBooking.css";
import NavBar from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const TherapyBooking = () => {
  const [therapists, setTherapists] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    therapy_type: "",
    schedule: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/therapists/")
      .then((response) => setTherapists(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTherapistChange = (e) => {
    const therapist = therapists.find((t) => t.id === parseInt(e.target.value));
    setSelectedTherapist(e.target.value);
    setSchedules(therapist ? therapist.schedule.split(", ") : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/bookings/", {
        ...formData,
        therapist: selectedTherapist,
      })
      .then((response) => {
      alert("Booking Successful");
       navigate("/therapy");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Unknown Error:", error.message)
        }
      }
  );
  }
  return (
    <>
      <NavBar />
      <div className="booking-container">
        <h2>Book a Therapy Session</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <select name="therapist" onChange={handleTherapistChange} required>
            <option value="">Select a Therapist</option>
            {therapists.map((therapist) => (
              <option key={therapist.id} value={therapist.id}>
                {therapist.name} ({therapist.specialty})
              </option>
            ))}
          </select>
          <select name="therapy_type" required onChange={handleChange}>
            <option value="">Select Therapy Type</option>
            <option value="Online">Online</option>
            <option value="Physical">Physical</option>
          </select>
          <select name="schedule" required onChange={handleChange}>
            <option value="">Select Schedule</option>
            {schedules.map((schedule, index) => (
              <option key={index} value={schedule}>
                {schedule}
              </option>
            ))}
          </select>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </>
  );
};


export default TherapyBooking;
