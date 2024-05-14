import { Link } from 'react-router-dom';
import React from 'react';


function Navbar() {
  return (
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/works" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Works
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/works/exercices">Exercices</Link></li>
            <li><Link className="dropdown-item" to="/works/etudedecas">Etude De Cas</Link></li>
            <li><Link className="dropdown-item" to="/works/projetsconcrets">Projets Concrets</Link></li>
          </ul>
        </li>
      </ul>
    </header>
  </div>
  );
}

export default Navbar;
