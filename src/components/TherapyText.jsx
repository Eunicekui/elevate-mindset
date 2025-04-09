import "./TherapyText.css";
import { Link } from "react-router-dom";


function TherapyText() {
  return (
    <>
      <section className="why-choose-us">
        <h2>Why Choose Our Therapy</h2>
        <ul>
          <li>✔ Professional and Certified Therapists.</li>
          <li>✔ Flexible online and In Person Sessions.</li>
          <li>✔ Personalized therapy Plans.</li>
          <li>✔ Affordable and accessible.</li>
        </ul>
      </section>
      <section className="cta">
        <h2>Book a Free Consultation</h2>
        <p>
          Take the first step towards better mental health. Book a session
          Today!
        </p>
        <Link to="/therapybooking">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>
    </>
  );
}
export default TherapyText;
