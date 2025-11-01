import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="logo" href="#">
          Falcão Tecnologia
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Nossos Serviços</a>
          </li>
          <li>
            <a href="#about">Quem Somos</a>
          </li>
          <li>
            <a href="#why">Por que escolher a Falcão Tecnologia?</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
