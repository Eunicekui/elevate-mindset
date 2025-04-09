import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the CSS file

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async () => {
    const url = isLogin
      ? "http://127.0.0.1:8000/api/login/"
      : "http://127.0.0.1:8000/api/register/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("accessToken", data.tokens.access);
        setMessage("Login successful! Redirecting...");

        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setMessage("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <div className="button-group">
          <button onClick={handleAuth} className="auth-button">
            {isLogin ? "Login" : "Register"}
          </button>
          <button onClick={() => setIsLogin(!isLogin)} className="auth-button">
            {isLogin ? "Register" : "Login"}
          </button>
        </div>

        {localStorage.getItem("accessToken") && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}

        <p className="auth-message">{message}</p>
      </div>
    </div>
  );
}

export default Auth;
