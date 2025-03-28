import "./AboutText.css";
import Founder1 from "../assets/eunice1.jpg";
import Founder2 from "../assets/kelvin1.jpg";
import Founder3 from "../assets/burale.jpg";
import Founder4 from "../assets/amanda.jpg";
import Therapy from "../assets/profTherapy.jpg";
import Resources from "../assets/meditating.jpg";
import Community from "../assets/groupTherapy.jpg";

function AboutText() {
  return (
    <>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          At Elevate Mindset, our mission is to break the stigma around mental
          health by providing accessible support, guidance, and resources. We
          believe that everyone deserves to live a fulfilling, balanced life
          with a healthy mind.
        </p>
      </section>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Elevate Mindset was founded with a simple yet powerful goal: To create
          a space where mental health well-being is prioritized. Our journey
          began with passion for helping individuals navigate life's challenges,
          and today, we continue to empower people with knowledge, therapy, and
          a supportive community.
        </p>
      </section>
      <section className="founders">
        <h2>Meet Our Founders</h2>
        <p>
          Behind Elevate Mindset is a team of passionate individuals dedicated
          to mental well-being
        </p>

        <div className="founders-container">
          <div className="founder-card">
            <img src={Founder1} alt="founder1" className="founder-image" />
            <h3>Eunice Kamau</h3>
            <p>Co-Founder & Mental Health Advocate</p>
          </div>
          <div className="founder-card">
            <img src={Founder2} alt="founder2" className="founder-image" />
            <h3>Kelvin Njogu</h3>
            <p>Co-Founder & Licenced Therapist</p>
          </div>
          <div className="founder-card">
            <img src={Founder3} alt="founder3" className="founder-image" />
            <h3>Robert Burale</h3>
            <p>Co-Founder & Life Coach</p>
          </div>
          <div className="founder-card">
            <img src={Founder4} alt="founder4" className="founder-image" />
            <h3>Amanda Wangui</h3>
            <p>Co-Founder & Mindfulness Expert</p>
          </div>
        </div>
      </section>
      <section className="how-we-help">
        <h2>Our Services</h2>
        <p>
          We provide accessible mental health support, resources, and a
          supportive community.
        </p>

        <div className="help-container">
          <div className="help-card">
            <img src={Therapy} alt="professional Therapy" />
            <h3>Professional Therapy</h3>
            <p>Connect with licensed therapists for personalized support.</p>
          </div>
          <div className="help-card">
            <img src={Resources} alt="resources" />
            <h3>Educational Resources</h3>
            <p>Access articles, guides and self-help tools for mental well-being.</p>
          </div>
          <div className="help-card">
            <img src={Community} alt="community support" />
            <h3>Supportive Community</h3>
            <p>Join a safe space where you can share and learn from others.</p>
          </div>
        </div>
      </section>
      <section className="join-us">
        <h2>Join Us</h2>
        <p>Be part of our movement to create a world where mental helath is a priority.</p>
        <button className="join-btn">Become a Member</button>
      </section>

    </>
  );
}

export default AboutText;
