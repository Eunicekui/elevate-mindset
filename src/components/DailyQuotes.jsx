import "./DailyQuotes.css";
import { useState, useEffect } from "react";

const quotes = [
  "Believe in Yourself and all that you are",
  "everyday is a second chance",
  "The best time for new beginnings is now",
  "You are sstronger than you think",
  "Small steps everyday lead to big changes",
  "Embrace the journey, not just the destination",
];
//function to get the current day number out of 365
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 100;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
const DailyQuotes = () => {
  const [dayNumber, setDayNumber] = useState(getDayOfYear());
  const quote = quotes[(dayNumber - 1) % quotes.length]; //Loop if Less than 365 days

  useEffect(() => {
    //update the day every midnight if the user leaves the page
    const interval = setInterval(() => {
      setDayNumber(getDayOfYear());
    }, 1000 * 60 * 60); //check every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="daily-quotes">
      <h2>Daily Motivation</h2>
      <p className="day-tracker">Day {dayNumber}/365</p>
      <blockquote className="quote">"{quote}"</blockquote>
    </div>
  );
};
export default DailyQuotes;
