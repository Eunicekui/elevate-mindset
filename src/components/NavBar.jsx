import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo1.png";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClicked(!clicked);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("username");

    if (token && storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    setUsername(null);
    setShowDropdown(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <img src={logo2} alt="logo" />
      </h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          if (item.title === "Log-In" && username) return null;

          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}

        {username && (
          <li className="nav-links user-dropdown" onClick={toggleDropdown}>
            Welcome, {username} <i className="fas fa-caret-down"></i>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
