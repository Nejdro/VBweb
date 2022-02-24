import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PersonIcon } from "@primer/octicons-react";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  const [navBg, setNavBg] = useState("#FFFFFF");
  const [navCol, setNavCol] = useState("#000000");
  const [navCol2, setNavCol2] = useState("#9D9D9D");
  const location = useLocation();
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setNavBg("#FFFFFF");
      setNavCol("#9D9D9D");
      setNavCol2("#000000");
    }
    if (window.location.pathname === "/about") {
      setNavBg("#E1EAE4");
      setNavCol("#9D9D9D");
      setNavCol2("#000000");
    }
    if (window.location.pathname === "/collection") {
      setNavBg("#6D888E");
      setNavCol("#FFFFFF");
      setNavCol2("#FFFFFF");
    }
    if (
      window.location.pathname === "/item" ||
      window.location.pathname === "/item/1" ||
      window.location.pathname === "/item/2" ||
      window.location.pathname === "/item/3" ||
      window.location.pathname === "/item/4" ||
      window.location.pathname === "/item/5" ||
      window.location.pathname === "/item/6"
    ) {
      setNavBg("#6D888E");
      setNavCol("#FFFFFF");
      setNavCol2("#FFFFFF");
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: navBg }}
    >
      <Link to="/" className="navbar-brand" style={{ color: navCol2 }}>
        Product name
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbar-Nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/about" class="nav-link" style={{ color: navCol }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/collection" class="nav-link" style={{ color: navCol }}>
              Collection
            </Link>
          </li>
        </ul>
      </div>
      <div className="icon">
        <PersonIcon size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
