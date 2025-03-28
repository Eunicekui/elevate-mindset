import MotivationText from "../components/MotivationText";
import NavBar from "../components/NavBar";
import DailyQuotes from "../components/DailyQuotes";
import Meditation from "../components/Meditation";
import Playlist from "../components/Playlist.jsx";
import Journal from "../components/Journal.jsx";
import Blogs from "../components/Blogs.jsx";
import Vlogs from "../components/Vlogs.jsx";

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
      <Journal />
    </>
  );
}

export default Motivation;
