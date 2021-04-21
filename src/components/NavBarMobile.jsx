import menuMobile from "../assets/imgs/menu-icon-mobile.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  const [window, setWindow] = useState(
    "nav-bar-mobile-window  window-inactive"
  );
  const [isOpen, setisOpen] = useState(false);

  function OpenCloseWindow() {
    if (!isOpen) {
      setWindow("nav-bar-mobile-window window-active");
    } else {
      setWindow("nav-bar-mobile-window window-inactive");
    }
    setisOpen(!isOpen);
  }

  return (
    <div>
      <nav className="nav-bar-mobile">
        <div className="nav-bar-mobile-btn">
          <button className="btn-menu" onClick={OpenCloseWindow}>
            <img
              src={menuMobile}
              alt="menu mobile"
              width="50px"
              height="50px"
            />
          </button>
        </div>
      </nav>
      <div className={window}>
        <ul>
          <li className="link-nav-bar">
            <Link onClick={OpenCloseWindow} to="/">
              HOME
            </Link>
          </li>
          <li className="link-nav-bar">
            <Link onClick={OpenCloseWindow} to="/portfolio">
              PORTFÓLIO
            </Link>
          </li>
          <li className="link-nav-bar">
            <Link onClick={OpenCloseWindow} to="/news">
              NEWS
            </Link>
          </li>
          <li className="link-nav-bar">
            <Link onClick={OpenCloseWindow} to="/blog">
              BLOG
            </Link>
          </li>
          <li className="link-nav-bar">
            <Link onClick={OpenCloseWindow} to="/contato">
              CONTATO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarMobile;
