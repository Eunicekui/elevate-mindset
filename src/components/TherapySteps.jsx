import "./TherapySteps.css";
import { useEffect, useRef } from "react";

const TherapySteps = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const steps = document.querySelectorAll(".step, .steps-container");
    steps.forEach((step) => observer.observe(step));

    return () => steps.forEach((step) => observer.unobserve(step));
  }, []);

  return (
    <section className="how-therapy-works" ref={sectionRef}>
      <h2>How Therapy Works</h2>
      <p>
        Starting Therapy is easy! Follow these simple steps to begin your
        Journey to mental well being.
      </p>
      <div className="steps-container">
        <div className="step">
          <div className="step-line"></div>
          <div className="step-dot"></div>
          <div className="step-content">
            <h3>Book An Appointment</h3>
            <p>Choose a date and time that fits your schedule.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-line"></div>
          <div className="step-dot"></div>
          <div className="step-content">
            <h3>Attend Your First Session</h3>
            <p>Begin Your Journey to Better Mental Health.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-line"></div>
          <div className="step-dot"></div>
          <div className="step-content">
            <h3>Continue Your Growth</h3>
            <p>Regular Sessions help you make Lasting Improvements.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TherapySteps;
