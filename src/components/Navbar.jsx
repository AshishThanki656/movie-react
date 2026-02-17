import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/LoginPage");
  };

  return (
    <nav className="navbar">
      <Link to="/movies" className="logo">
        <h1>🎬 MovieApp</h1>
      </Link>

      <div className="actions">
        {user && (
          <span className="user-info">
            <p>Hi, {user}</p>
            <button className="danger" onClick={handleLogout}>
              Logout
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
