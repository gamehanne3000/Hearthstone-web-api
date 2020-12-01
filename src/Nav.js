// import neccesery libraries
import "./App.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="no logo found"></img>
      <ul>
        <Link to="/">
          <li>Menu</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
