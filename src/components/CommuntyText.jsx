import "./CommunityText.css";
import Stories from "./Stories.jsx";

const CommunityText = () => {

  const events = [
    {
      title: "Mindfulness Workshop",
      date: "March 10, 2025",
    },
    {
      title: "Mental Wellness Q&A",
      date: "March 20, 2025",
    },
    {
      title: "Guided Meditation Session",
      date: "March 28, 2025",
    },
  ];

  return (
    <div className="community-page">
      <section className="hero-community">
        <div className="hero-content">
          <h1>Welcome to the Elevate Mindset Community.</h1>
          <p>A safe space to connect, share and grow together.</p>
          <button className="btn">Join Our Community</button>
        </div>
      </section>
      <section className="why-join">
        <h2>Why Join Our Community?</h2>
        <div className="benefits">
          {[
            "Access To Mental Health Resources",
            "Live Q&A Sessions with Therapists",
            "Exclusive workshops & webinars",
            "Daily Motivation and mental wellness tips",
          ].map((benefit, index) => (
            <div className="benefit" key={index}>
              <span className="icon">✔</span> {benefit}
            </div>
          ))}
        </div>
      </section>
      <Stories />
      <section className="discussion">
        <h2>Join Our Discussion Forum</h2>
        <p>Engage in meaningful conversations with others who understand your journey.</p>
        <button className="btn">Coming soon: Live Forum Chat</button>
      </section>
      <section className="events">
        <h2>Upcoming Events & Workshops</h2>
        <p>Stay connected and grow with our expert-led sessions.</p>
        <ul className="events-lists">
          {events.map((event, index) => (
            <li key={index}>
              <div className="event-info">
                <span>{event.title} - {event.date}</span>
                <button className="btn-small">Register Now</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CommunityText;
