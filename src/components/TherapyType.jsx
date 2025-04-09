import "./HomeText.css";
import PhysicalTherapy from "../assets/physical therapy.avif";
import OnlineTherapy from "../assets/online therapy.webp";
import { Link } from "react-router-dom";


function TherapyType() {
  return (
    <>
      <div className="heading">
        <h1>Therapy sessions at Elevate Mindset</h1>
        <p>Choose Your Most convinient Type</p>
      </div>
      <div className="physical-therapy">
        <img src={PhysicalTherapy} alt="physical-therapy" />
        <div className="text">
          <h1>Healing Your Mind and Body with Holistic Physical Therapy</h1>
          <p>
            An in person sessions offers a more personal and direct connection
            with licensed therapist, fostering an environment of trust and
            openness. It allows for better non verbal communication, such as
            body language and facila expressions, which can help the therapist
            better understand a person's emotional state.
          </p>
          <Link to="/therapybooking">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="online-therapy">
        <div className="text">
          <h1>Transform Your Mental Health with Convenient Online Therapy</h1>
          <p>
            Online Therapy allows individuals to engage in couselling sessions
            with licenced professionals through video calls, phone calls, or
            even text messages. This is beneficial for people in remote areas or
            those with busy schedules. It allows you receive therapy from the
            comfort of your home.
          </p>
          <Link to="/therapybooking">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
        <img src={OnlineTherapy} alt="online-therapy" />
      </div>
    </>
  );
}

export default TherapyType;