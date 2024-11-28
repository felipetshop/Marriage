import React from 'react';
import '../styles/Navbar.css'; // Importando o estilo da navbar

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Ajude</a>
      </div>
    </div>
  );
};

export default Navbar;