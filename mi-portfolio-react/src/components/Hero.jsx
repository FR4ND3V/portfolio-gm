import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image">
          {/* Sustituye la ruta por tu imagen real */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Foto de perfil"
          />
        </div>
        <div className="hero-text">
          <h1>¡Hola! Soy <span className="hero-name">Tu Nombre</span></h1>
          <h2>Desarrollador Frontend & UX Enthusiast</h2>
          <p>
            Apasionado por crear experiencias digitales modernas, accesibles y atractivas.<br />
            Especializado en React, JavaScript y diseño web responsivo.<br />
            <span className="hero-highlight">¿Listo para transformar tus ideas en realidad?</span>
          </p>
          <a href="#contact" className="hero-cta">Contáctame</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;