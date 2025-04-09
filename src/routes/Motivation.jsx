import MotivationText from "../components/MotivationText";
import NavBar from "../components/NavBar";
import DailyQuotes from "../components/DailyQuotes";
import Meditation from "../components/Meditation";
import Playlist from "../components/Playlist.jsx";
import Blogs from "../components/Blogs.jsx";
import Vlogs from "../components/Vlogs.jsx";
import { Link } from "react-router-dom";

function Motivation() {
  return (
    <>
      <NavBar />
      <MotivationText />
      <DailyQuotes />
      <Blogs />
      <Vlogs />
      <Meditation />
      <Playlist />
      <div className="journal">
        <h1>Want to unwind Through writing?</h1>
        <p>Weve got yo covered through our Journal writing.</p>
        <Link to="/journal"> Journal
        </Link>
      </div>
    </>
  );
}

export default Motivation;
