import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css"

export default function Navbar() {

  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let closeNavbar = () => {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  let navLinkStyle = ({ isActive }) =>
    "nav-link nav-hover " + (isActive ? "active-link" : "");

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-navbar ${scrolled ? "navbar-glass navbar-shrink" : "navbar-transparent navbar-normal"
        }`}>
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold text-light fs-4" to="/">
          VS
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">
            <li className="nav-item">
              <NavLink to="/" className={navLinkStyle} onClick={closeNavbar} style={{ color: "white" }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={navLinkStyle} onClick={closeNavbar} style={{ color: "white" }}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={navLinkStyle} onClick={closeNavbar} style={{ color: "white" }}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className={navLinkStyle} onClick={closeNavbar} style={{ color: "white" }}>
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}