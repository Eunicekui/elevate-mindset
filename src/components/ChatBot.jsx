import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/chat/history/");
      setHistory(res.data);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:8000/api/chat/", {
        message: input,
      });
      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
      fetchHistory();
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  // Create summarized user history for sidebar
  const getUserSummaries = () => {
    const summaries = [];
    for (let i = 0; i < history.length; i++) {
      if (history[i].sender === "user") {
        const summary =
          history[i].text.length > 25
            ? history[i].text.slice(0, 25) + "..."
            : history[i].text;
        summaries.push({ text: summary, index: i });
      }
    }
    return summaries;
  };

  return (
    <div className="chat-app">
      <div className={`history-panel ${showHistory ? "open" : ""}`}>
        <ul>
          {getUserSummaries().map((item, idx) => (
            <li key={idx} className="history-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        <button
          className="toggle-btn"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Type your message..."
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
