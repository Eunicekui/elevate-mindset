import NavBar from "../components/NavBar";
import Hero from "../components/Hero.jsx";
import AboutText from "../components/AboutText.jsx";
import Faqs from "../components/Faqs.jsx";
import Footer from "../components/Footer.jsx";

function About() {
  return (
    <>
      <NavBar />
      <Hero
        className="about-hero"
        heading1="Empowering your Mind, Elevating Your Life"
        text="At Elevate Mindset, we believe in Breaking the stigma around Mental Health and Providing support you Need to Thrive."
        buttonText="Get Started"
        url="/"
        btnClass="cta-button"
      />
      <AboutText />
      <Faqs />
      <Footer />
    </>
  );
}
export default About;
