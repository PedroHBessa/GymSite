import React from "react";

import { Link, NavLink } from "react-router-dom";

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
            <NavLink activeStyle={colorBtn} exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/plans">
              PLANOS
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/structure">
              ESTRUTURA
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/reopen">
              REABERTURA
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/contacts">
              CONTATO
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
