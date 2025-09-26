import "./Banner.css";
import clsx from "clsx";

export const Banner = () => {
  return (
    <div className="banner">
      <a href="{/* lien vers la BDD*/}">
        <img src="public/pict/imgtest.png" alt="banner" />
      </a>
      <h2>Titre du film</h2>
    </div>
  );
};
