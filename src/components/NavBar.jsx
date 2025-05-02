import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({onNavClick}) {
  return (
    <nav>
      <Link to="/kampo" onClick={onNavClick}>Kampo</Link>
      <Link to="/toxins" onClick={onNavClick}>Toxins</Link>
      <Link to="/about" onClick={onNavClick}>About</Link>
    </nav>
  );
}

export default NavBar;
