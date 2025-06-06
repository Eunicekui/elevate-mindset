import "./ContactPage.css";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/enquiries/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setError("Failed to submit enquiry. Please try again.");
        console.error("Error response:", errorData);
      }
    } catch (error) {
      setError("An error occurred while submitting your enquiry.");
      console.error("Network error:", error);
    }
  };

  return (
    <div className="contact-page">
      <section className="hero-contact">
        <h1>Contact Us</h1>
        <p>Have Questions? We're here to help! Get In Touch With Us Today.</p>
      </section>
      <div className="contact-container">
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          {submitted && (
            <p className="success-message">Thank You! We'll get back to you soon.</p>
          )}
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>📍 Location: 144 Waiyaki Way, Nairobi, Kenya</p>
          <p>📧 Email: support@elevatemindset.com</p>
          <p>📞 Phone: +254 114857302</p>
          <p>🕐 Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
