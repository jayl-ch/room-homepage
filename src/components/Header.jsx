import { useState, useEffect } from "react";

const NavMenuBtn = ({ toggleMenu }) => (
  <button type="button" onClick={toggleMenu} className="navbar__menu-btn">
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  </button>
);

const NavCloseBtn = ({ toggleMenu }) => (
  <button type="button" onClick={toggleMenu} className="navbar__close-btn">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill="#000"
        fillRule="evenodd"
        opacity=".201"
      />
    </svg>
  </button>
);

const NavList = ({ isActive, toggleMenu }) => (
  <div className={`navbar__lists-wrapper ${isActive ? "active" : ""}`}>
    <NavCloseBtn toggleMenu={toggleMenu} />
    <ul className="navbar__lists">
      {["home", "shop", "about", "contact"].map((item) => (
        <li className="nav-item" key={item}>
          <a href="" className="nav-link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NavTitle = () => (
  <div className="navbar__brand">
    <a href="" className="navbar__title">
      room
    </a>
  </div>
);

const Overlay = ({ isActive, toggleMenu }) => (
  <div
    onClick={toggleMenu}
    className={`overlay ${isActive ? "active" : ""}`}
  ></div>
);

const NavBar = ({ toggleMenu, isActive }) => (
  <nav className="navbar">
    <NavMenuBtn toggleMenu={toggleMenu} />
    <NavTitle />
    <NavList isActive={isActive} toggleMenu={toggleMenu} />
    <Overlay isActive={isActive} toggleMenu={toggleMenu} />
  </nav>
);

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive((v) => !v);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isActive]);

  return (
    <header>
      <NavBar toggleMenu={toggleMenu} isActive={isActive} />
    </header>
  );
}

export default Header;
