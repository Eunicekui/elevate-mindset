import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Therapists from "../Components/Therapists.jsx";
import TherapyType from "../components/TherapyType.jsx";
import TherapySteps from "../components/TherapySteps.jsx";
import Footer from "../components/Footer.jsx";
import TherapyText from "../components/TherapyText.jsx";

function Therapy() {
  return (
    <>
      <NavBar />
      <Hero
        className="hero-mid"
        heading1="Taking Therapy Changes The Brain."
        text="Therapy is not just for people in crisis, anyone can benefit from therapy, even if they don't have a
        diagnozied mental health condition"
        buttonText="Book a Session"
        url="/"
        btnClass="cta-button"
      />
      <TherapyType />
      <TherapySteps />
      <Therapists />
      <TherapyText />
      <Footer />
    </>
  );
}

export default Therapy;
