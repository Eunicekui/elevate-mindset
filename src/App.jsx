import "./App.css";
import About from "./routes/About.jsx";
import Community from "./routes/Community.jsx";
import Therapy from "./routes/Therapy.jsx";
import AITherapist from "./routes/AITherapist.jsx";
import Motivation from "./routes/Motivation.jsx";
import Contact from "./routes/Contact.jsx";
import LogIn from "./routes/LogIn.jsx";
import Home from "./routes/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Auth from "./components/Auth.jsx";
import SignUp from "./components/SignUp.jsx";
import TherapyBooking from "./components/TherapyBooking.jsx";
import EventRegistration from "./components/EventRegistration.jsx";
import Journal from "./components/Journal.jsx";
import ChatBox from "./components/ChatBox.jsx";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AItherapist" element={<AITherapist />} />
          <Route path="/community" element={<Community />} />
          <Route path="/eventregistration" element={<EventRegistration />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/therapybooking" element={<TherapyBooking />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/chatbox" element={<ChatBox />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
