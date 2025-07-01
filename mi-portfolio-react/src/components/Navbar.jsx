import React from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Portfolio</div>
      <div className="navbar-links">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;