import "./Vlogs.css";
import { useState } from "react";

const vlogs = [
  {
    id: 1,
    title: "Mindful Morning Routine",
    url: "https://www.youtube.com/embed/Fo6oU4DfdH0?si=MG_RGvQ0IzvR4ryn",
  },
  {
    id: 2,
    title: "Overcoming negative thoughts",
    url: "https://www.youtube.com/embed/eeHLyNFOXM4?si=Evy5l50KBKzOFfNj",
  },
  {
    id: 3,
    title: "Breathing Exercises for Anxiety.",
    url: "https://www.youtube.com/embed/tEmt1Znux58",
  },
  {
    id: 4,
    title: "How To Practice Self-Love.",
    url: "https://www.youtube.com/embed/tEmt1Znux58",
  },
  {
    id: 5,
    title: "Guided Meditation for Relaxation.",
    url: "https://www.youtube.com/embed/tEmt1Znux58",
  },
  {
    id: 6,
    title: "Creating a Positive Mindset.",
    url: "https://www.youtube.com/embed/tEmt1Znux58",
  },
];
const Vlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextVlogs = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < vlogs.length ? prevIndex + 2 : 0
    );
  };
  const prevVlogs = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 >= 0
        ? prevIndex - 2
        : vlogs.length - (vlogs.length % 2 === 0 ? 2 : 1)
    );
    useEffect(() => {
        const autoSlide = setInterval(() => {
          nextVlogs();
        }, 10000);
    
        return () => clearInterval(autoSlide);
      }, [currentIndex]);
    const goToVlog = (index) => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setFade(true);
      }, 300);
    };
  };
  return (
    <section className="vlogs-section">
      <h2>Explore Our Vlogs</h2>
      <p>
        Watch insipiring videos that guide you through mental health and
        self-care practices.
      </p>
      <div className="vlog-container">
        <button className="nav-arrow left-arrow" onClick={prevVlogs}>
          &lt;
        </button>
        <div className="vlogs-display">
          {vlogs.slice(currentIndex, currentIndex + 2).map((vlog) => (
            <div key={vlog.id} className="vlogs-item">
              <iframe
                src={vlog.url}
                title={vlog.title}
                allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gryoscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="vlog-title">{vlog.title}</p>
            </div>
          ))}
        </div>
        <button className="nav-arrow right-arrow" onClick={nextVlogs}>
          &gt;
        </button>
      </div>
      <div className="pagination-dots">
        {vlogs.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToVlog (index)}
          ></span>
        ))}
      </div>
    </section>
  );
};
export default Vlogs;