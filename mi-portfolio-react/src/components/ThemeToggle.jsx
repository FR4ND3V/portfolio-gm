import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  // Detecta el modo preferido del sistema al cargar
  const getPreferredTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(getPreferredTheme);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}

export default ThemeToggle;