import "./Blogs.css";
import { useState, useEffect } from "react";
import blog1 from "../assets/1.jpg";
import blog2 from "../assets/1.jpg";
import blog3 from "../assets/1.jpg";
import blog4 from "../assets/1.jpg";

const blogs = [
  {
    id: 1,
    title: "The power of positive Thinking.",
    date: "February 10, 2025",
    image: blog1,
    content:
      "Positive thinking can transform your mindset and improve your mental health. It starts with small steps, such as gratitude journaling and self affirmations.",
  },
  {
    id: 2,
    title: "Coping with Anxiety.",
    date: "February 15, 2025",
    image: blog2,
    content:
      "Anxiety is common, but there are techniques to manage it. From deep breathing exercises to professional therapy, you can find ways to cope.",
  },
  {
    id: 3,
    title: "Building Resiliance",
    date: "February 20, 2025",
    image: blog3,
    content:
      "Resilience helps you bounce back from challenges. Practicing mindfulness, nurturing positive relationships, and developing problem-solving skills can strengthen resilience.",
  },
  {
    id: 4,
    title: "The Importance of Self-Care.",
    date: "February 25, 2025",
    image: blog4,
    content:
      "Self-care is not selfish. Taking time for yourself, setting boundaries, and prioritizing mental health are key aspects of a balanced life.",
  },
];
const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const nextBlog = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      setFade(true);
    }, 300);
  };
  const prevBlog = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length
      );
      setFade(true);
    }, 300);
  };
  const goToBlog = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextBlog();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const currentBlog = blogs[currentIndex];

  return (
    <section className="blogs-section">
      <h2>Explore Our Blogs</h2>
      <p>
        Learn, grow and find insipiration with expert insights and real-life
        stories.
      </p>
      <div className="blog-container">
        <button className="nav-arrow left-arrow" onClick={prevBlog}>
          &lt;
        </button>
        <div
          className={`blog-content-container ${fade ? "fade-in" : "fade-out"}`}
        >
          <img
            src={currentBlog.image}
            alt={currentBlog.title}
            className="blog-image"
          />
          <div className="blog-text">
            <h3>{currentBlog.title}</h3>
            <p className="blog-date">{currentBlog.date}</p>
            <p className="blog-content">{currentBlog.content}</p>
          </div>
        </div>
        <button className="nav-arrow right-arrow">&gt;</button>
      </div>
      <div className="pagination-dots">
        {blogs.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() =>goToBlog(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
