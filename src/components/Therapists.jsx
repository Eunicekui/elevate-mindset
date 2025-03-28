import { useState } from "react";
import "./Therapists.css";
import Therapist1 from "../assets/therapist1.webp";
import Therapist2 from "../assets/therapy2.jpg";
import Therapist3 from "../assets/therapy11.jpg";
import Therapist4 from "../assets/9.jpg";
import Therapist5 from "../assets/therapy9.jpg";
import Therapist6 from "../assets/therapy6.jpg";
import Therapist7 from "../assets/therapy10.jpg";
import Therapist8 from "../assets/therapy8.jpg";

const therapists = [
  {
    id: 1,
    name: "Dr. James Clark",
    speciality: "Family Counsellor",
    image: Therapist1,
  },
  {
    id: 2,
    name: "Dr. Kelvin Scott",
    speciality: "Marriage counsellor",
    image: Therapist2,
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    speciality: "Depression Therapist",
    image: Therapist3,
  },
  {
    id: 4,
    name: "Dr. Mike Johnson",
    speciality: "Anxiety Therapist",
    image: Therapist4,
  },
  {
    id: 5,
    name: "Dr. Sarah Lee",
    speciality: "Stress Therapist",
    image: Therapist5,
  },
  {
    id: 6,
    name: "Dr. Alice White",
    speciality: "Behavioural Therapist",
    image: Therapist6,
  },
  {
    id: 7,
    name: "Dr. Tom Hardy",
    speciality: "Cognitive Therapist",
    image: Therapist7,
  },
  {
    id: 8,
    name: "Dr. Jane Smith",
    speciality: "Financial Therapist",
    image: Therapist8,
  },
];

const Therapists = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; //show 4 therapists at a time

  //move to the next set of therapists
  const nextSlide = () => {
    if (startIndex + visibleCount < therapists.length) {
      setStartIndex(startIndex + 1);
    }
  };

  //move to the previous set of therapists
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="therapist-section">
      <h1>Meet Our Therapists</h1>
      <p>Get Professional help from our most qualified therapists.</p>

      <div className="carousel-container">
        <button
          className="arrow left"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          &#8249;
        </button>

        <div className="therapist-container">
          {therapists
            .slice(startIndex, startIndex + visibleCount)
            .map((therapist, index) => (
              <div
                key={therapist.id}
                className={`therapist-card ${
                  index % 2 === 0 ? "lower" : "higher"
                }`}
              >
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="therapist-image"
                />

                <div className="therapist-info">
                  <h3>{therapist.name}</h3>
                  <p>{therapist.speciality}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          className="arrow right"
          onClick={nextSlide}
          disabled={startIndex + visibleCount >= therapists.length}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Therapists;