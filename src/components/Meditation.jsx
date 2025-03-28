import "./Meditation.css";
import Exercise1 from "../assets/1.jpg";
import Exercise2 from "../assets/musictherapy.webp";

const Meditation = () => {
  const exercises = [
    {
      id: 1,
      title: "5-Minutes Breathing Exercise",
      description: "Relax Your Mund with this guided breathing session",
      audio: "/",
      image: Exercise1,
    },
    {
      id: 2,
      title: "Body Scan Meditation",
      description:
        "A 10-Minutes bosy scan to relieve tension and calm your mind.",
      audio: "/",
      image: Exercise2,
    },
  ];

  const tips = [
    "Find a quiet place where you won't be disturbed.",
    "Sit comfortably with your back straight and hands relaxed.",
    "Focus on your breath - in through your nose, out through your mouth.",
    "Let go of thoughts as they arise - gently bring your focus back to your breath.",
    "Start with just 2 minutes, and generally increase time as you feel more comfortable.",
  ];

  return (
    <div className="mediation-section">
      <h2>Meditation Mindfulness</h2>
      <p className="intro-text">
        Discover simple exercises and techniques to help you manage stress and
        improve focus through mindful meditation.
      </p>
      <div className="exercises">
        {exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            className={`exercise-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <img src={exercise.image} alt={exercise.title} className="exercise-image" />
            <div className="exercise-content">
                <h3>{exercise.title}</h3>
                <p>{exercise.description}</p>
                <audio controls> 
                    <source src={exercise.audio} type="audio/mps" />Your audio does not support the audio element
                </audio>
            </div>
          </div>
        ))}
      </div>
      <div className="meditation-tips">
        <h3>Tips for Effective Meditation</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Meditation;
