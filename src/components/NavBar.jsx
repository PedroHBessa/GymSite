import React from "react";
import logo from "../assets/imgs/logo-dao.jpeg";

import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const colorBtn = {
    backgroundColor: "rgba(202, 4, 4, 0.829)",
    color: "rgb(255, 255, 255)",
  };

  return (
    <div className="navbar">
      <nav className="navbar-logo">
        <img src={logo} alt="" />
        <p>ACADEMIA DAO TRAINING</p>
      </nav>
      <nav className="navbar-menu">
        <ul>
          <li>
            <NavLink activeStyle={colorBtn} exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/modalities">
              MODALIDADES
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={colorBtn} to="/structure">
              LOCALIZAÇÃO
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
