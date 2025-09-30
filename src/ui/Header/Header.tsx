import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Header.css";


export const Header = () => {
  return (
    <div className="header">
      <img src="/Logo_SimploCine.png" alt="logo" />
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
