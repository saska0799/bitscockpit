import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light fs-4">
      <div className="container">
        <ul className="navbar-nav py-2">
          <li className="nav-item me-3">
            <Link to="/" className="nav-link">
              Početna strana
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link to="/about" className="nav-link">
              O aplikaciji
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
