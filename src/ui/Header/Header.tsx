import "./Header.css";
import clsx from "clsx";
import { Button } from "../button/Button";
import Logo_SimploCine from "/pict/Logo_SimploCine.jpg";

//interface ? 

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo_SimploCine} alt="logo" />
      <h1>Simplo Ciné</h1>
      <nav>
        <ul>
          {/* <li>
            <button>Liste des films</button>
          </li>
          <li>
            <button>Liste des séries</button>
          </li> */}

          <li><Button label="Liste des films"/></li>
          <li><Button label="Liste des séries"/></li>
        </ul>
      </nav>
    </div>
  );
};

