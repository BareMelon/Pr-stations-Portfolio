import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="name">Gustav Fyhn</h1>
        <nav className="navigation">
          <a href="#about">Om Mig</a>
          <a href="#projects">Projekter</a>
          <a href="#contact">Kontakt</a>
          <a href="#documents">Dokumenter</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;