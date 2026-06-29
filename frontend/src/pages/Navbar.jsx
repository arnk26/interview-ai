import React from "react";
import { Link } from "react-router-dom";
import "../pages/Navbar.css";

const Navbar = () => {
  return (
    <header className="nav">
      <Link to="/" className="mcq-brand">
        <div className="brand-logo">AI</div>
        <div>
          <h2>Smart MCQ Generator</h2>
          <p>Practice faster with AI-powered questions</p>
        </div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/mcq">MCQ TEST</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;