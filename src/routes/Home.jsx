import NavBar from "../components/NavBar.jsx";
import HomeImage from "../assets/11.avif";
import Hero from "../components/Hero.jsx";
import HomeText from "../components/HomeText.jsx";
import Footer from "../components/Footer.jsx";
import TherapyType from "../components/TherapyType.jsx";
import Faqs from "../components/Faqs.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        className="hero"
        heroImg={HomeImage}
        heading1="Self care is not Selfish."
        heading2="Don't overlook Mental Health"
        text="Your Mental Health is just as important as your physical Health.
         It's Okay not to be okay. 
         You are not your mental illness Your struggles don't define you."
        buttonText="Get Started"
        url="/"
        btnClass="show"
        heading3="Free Chat 24/7"
        chatText="Our AI therapist is always available to help you out at anyday and anytime."
        heading4="Meditation playlists"
        cardText="Personalized Playlists for mediation is available"
      />
      <TherapyType />
      <HomeText />
      <Faqs />
      <Footer />
    </>
  );
}

export default Home;
