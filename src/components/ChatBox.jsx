import React, { useState, useEffect, useRef } from "react";
import "./ChatBox.css";
import { Picker } from 'emoji-mart';
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";


const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");

  // Fetch messages every 2 seconds
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/messages/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(response.data);
      } catch (err) {
        console.error("Error fetching messages", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);

    return () => clearInterval(interval);
  }, [token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      await axios.post(
        "http://localhost:8000/api/messages/",
        { username, message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("");
      setShowEmojiPicker(false);
    } catch (err) {
      console.error("Error sending message", err);
    }
  };

  const addEmoji = (emoji) => setMessage((prev) => prev + emoji.native);

  return (
    <>
      <NavBar />
      <div className="chat-container">
        <div className="chat-header">Group Chat</div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${
                msg.username === username ? "self" : "other"
              }`}
            >
              <strong>{msg.username}:</strong> {msg.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <button
            className="emoji-toggle"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="emoji-picker">
              <Picker onSelect={addEmoji} />
            </div>
          )}
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatBox;
