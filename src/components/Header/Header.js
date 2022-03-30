import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header rounded">
      <nav className="nav ">
        <Link to="/">Home</Link>
        <Link to="image">Image</Link>
        <Link to="about">About</Link>
        <Link to="restotrent">Restotrent</Link>

      </nav>
    </div>
  );
};

export default Header;
