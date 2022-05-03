import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./NavMenu.css";

export default function NavMenu({ showMenu, toggleMenu }) {
  return (
    <div className="nav-menu">
      <div className="nav-menu__top">
        <h3>BarMate</h3>
        <button className="toggler" onClick={toggleMenu}>
          <HiMenu />
        </button>
      </div>
      <nav className={`nav ${showMenu ? "nav--show" : ""}`}>
        <ul>
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/mybar">MyBar</Link>
          </li>
          <li className="nav__item">
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
