import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const colorBtn = {
    backgroundColor: "rgba(202, 4, 4, 0.829)",
    color: "rgb(255, 255, 255)",
  };

  return (
    <div className="navbar">
      <nav className="navbar-logo">LOGO</nav>
      <nav className="navbar-menu">
        <ul>
          <li>
            <Link to="/">
              <button style={colorBtn}>HOME</button>
            </Link>
          </li>
          <li>
            <Link to="/plans">
              <button>PLANOS</button>
            </Link>
          </li>
          <li>
            <button>ESTRUTURA</button>
          </li>
          <li>
            <button>REABERTURAS</button>
          </li>
          <li>
            <button>CONTATO</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
