import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EventRegistration.css"; 
import NavBar from "../components/NavBar.jsx";

const EventRegistration = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/events/")
            .then(response => response.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching events:", error));
    }, []);

    const handleRegister = (eventId) => {
        const name = prompt("Enter Your Name:");
        if (!name) {
            alert("Name is required!");
            return;
        }
        const email = prompt("Enter Your Email:");
        if (!name) {
          alert("Eunice is required!");
          return;
        }
        // Register without requiring authentication
        fetch(`http://127.0.0.1:8000/api/events/${eventId}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                event_id: eventId
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Successfully registered for the event!");
                navigate("/community");  // Redirect to community page after successful registration
            }
        })
        .catch(error => console.error("Registration error:", error));
    };

    if (loading) {
        return <div>Loading events...</div>;
    }

    return (
        <>
            <NavBar />
            <div className="event-container">
                <h2>Upcoming Events</h2>
                <ul className="event-list">
                    {events.map(event => (
                        <li key={event.id} className="event-card">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <button onClick={() => handleRegister(event.id)}>Register</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventRegistration;
