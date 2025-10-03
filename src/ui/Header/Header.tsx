import Logo_SimploCine from "/Logo_SimploCine.jpg"
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./Header.css";


export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <img src={Logo_SimploCine} alt="logo" />
      </Link>
      <h1>Simplo Ciné</h1>
      <nav>
        <ul>
          <Link to="/listfilms">
          <li><Button label="Liste des films"/></li>
          </Link>
          <Link to="/listSeries">
          <li><Button label="Liste des séries"/></li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
