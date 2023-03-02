import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/nav.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={closeDropdown}>
            HOME
          </Link>
        </li>
        <li>
          <button
            onClick={toggleDropdown}
            className={
              location.pathname === "/characters" ||
              location.pathname === "/organizations" ||
              location.pathname === "/regions"
                ? "active"
                : ""
            }
          >
            WORLD ▼
          </button>
          {showDropdown && (
            <ul className="nav_inner">
              <li
                className={location.pathname === "/characters" ? "active" : ""}
              >
                <Link to="/characters" onClick={closeDropdown}>
                  CHARACTERS
                </Link>
              </li>
              <li className={location.pathname === "/regions" ? "active" : ""}>
                <Link to="/regions" onClick={closeDropdown}>
                  REGIONS
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/organizations" ? "active" : ""
                }
              >
                <Link to="/organizations" onClick={closeDropdown}>
                  ORGANIZATIONS
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={location.pathname === "/donate" ? "active" : ""}>
          <Link to="/donate" onClick={closeDropdown}>
            DONATE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
