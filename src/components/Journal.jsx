import "./Journal.css";
import { useState, useEffect } from "react";

const moods = ["Happy", "Sad", "Anxious", "Calm", "Motivated", "Tired"];

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  useEffect(() => {
    const savedEntires =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntires);
  }, []);

  const saveEntry = () => {
    if (currentEntry.trim() === "" || selectedMood === "") {
      alert("Please write something and select your mood.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      text: currentEntry,
      mood: selectedMood,
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);

    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    setCurrentEntry(""); //clear textarea
    setSelectedMood(""); //reset mood
  };
  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
  };

  return (
    <section className="journal-section">
      <h2>My Personal Journal</h2>
      <p>
        Writing down your thoughts and feelings can help you reflect, release
        stress, and track your emotional journey.
      </p>
      <div className="journal-entry-form">
        <textarea
          placeholder="Write your thoughts here..."
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
        ></textarea>
        <div className="mood-selector">
          <p>Select Your Mood:</p>
          <div className="mood-options">
            {moods.map((mood) => (
              <button
                key={mood}
                className={mood === selectedMood ? "selected" : ""}
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
        <button onClick={saveEntry}>Save Entry</button>
      </div>
      <div className="journal-entries">
        {entries.length === 0 ? (
          <p className="no-entries">
            No entries yet. Start writing your journal entry!.
          </p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="jounal-entry">
              <div className="entry-header">
                <span>{entry.date}</span>
                <span className={`mood-tag mood-${entry.mood.toLowerCase()}`}>
                  {entry.mood}
                </span>
                <button onClick={() => deleteEntry(entry.id)}>Delete</button>
              </div>
              <p>{entry.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
export default Journal;
