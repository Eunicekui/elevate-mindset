import "./Stories.css";
import { useState, useEffect } from "react";
import story1 from "../assets/story1.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3.jpg";
import story4 from "../assets/story4.jpg";
import story5 from "../assets/story5.jpg";
import story6 from "../assets/story6.jpg";

const stories = [
  {
    image: story1,
    text: "This community helped me feel less alone in my struggles.",
    name: "Alex K.",
  },
  {
    image: story2,
    text: "I finally found a place where i can share my journey without judgement.",
    name: "Samantha T.",
  },
  {
    image: story3,
    text: "The support here is incredible. It has changed my life!",
    name: "John P.",
  },
  {
    image: story4,
    text: "Being part of this community gave me hope again.",
    name: "Maria D.",
  },
  {
    image: story5,
    text: "The friends i made here are lifelong. I cannot imagine my life without them.",
    name: "James W.",
  },
  {
    image: story6,
    text: "This space is my save heaven. It has been an incredible Journey.",
    name: "Nina M.",
  },
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= stories.length ? 0 : prevIndex + 2
      );
    }, 5000); //every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToStoryPair = (index) => {
    setCurrentIndex(index);
  };
  const totalPairs = Math.ceil(stories.length / 2);
  return (
    <div className="stories-carousel">
      <h2>Community Stories</h2>
      <p>Real Stories from people who have found support in our community.</p>
      <div className="stories-pair">
        {stories.slice(currentIndex, currentIndex + 2).map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.name} />
            <p>"{story.text}"</p>
            <h4>-{story.name}</h4>
          </div>
        ))}
      </div>
      <div className="story-dots">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === Math.floor(currentIndex / 2) ? "active" : ""
            }`}
            onClick={() => goToStoryPair(index * 2)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Stories;
