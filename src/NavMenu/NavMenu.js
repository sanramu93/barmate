import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./NavMenu.css";

export default function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="nav-menu__top">
        <h3>BarMate</h3>
        <HiMenu />
      </div>
      <nav className="nav-menu__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mybar">MyBar</Link>
          </li>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
