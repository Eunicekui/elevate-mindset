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

function App() {
  return (
    <div className="App">
        <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AItherapist" element={<AITherapist />} />
        <Route path="/community" element={<Community />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
