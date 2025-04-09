import React, { useEffect, useState } from "react";
import axios from "axios";
import "./journal.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem("accessToken"); 

  const fetchJournals = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/journals/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJournals(res.data);
    } catch (error) {
      console.error("Error fetching journals:", error);
      if (error.response?.status === 401) {
        window.location.href = "/login";
      }
    }
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchJournals();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(
          `http://localhost:8000/api/journals/${editId}/`,
          { title, content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEditId(null);
      } else {
        await axios.post(
          "http://localhost:8000/api/journals/",
          { title, content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      setTitle("");
      setContent("");
      fetchJournals();
    } catch (error) {
      console.error("Error submitting journal:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/journals/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJournals();
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  const handleEdit = (journal) => {
    setEditId(journal.id);
    setTitle(journal.title);
    setContent(journal.content);
  };

  return (
    <>
      <NavBar />
      <div className="journal-container">
        <h2>{editId ? "Edit Journal" : "New Journal Entry"}</h2>
        <form onSubmit={handleSubmit} className="journal-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </form>

        <div className="journal-entries">
          {Array.isArray(journals) &&
            journals.map((journal) => (
              <div key={journal.id} className="journal-entry">
                <h3>{journal.title}</h3>
                <p>{journal.content}</p>
                <span>{new Date(journal.created_at).toLocaleString()}</span>
                <div className="actions">
                  <button onClick={() => handleEdit(journal)}>Edit</button>
                  <button onClick={() => handleDelete(journal.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Journal;
