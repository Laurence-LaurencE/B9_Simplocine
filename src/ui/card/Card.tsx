import { Link } from "react-router";
import type { CardProps } from "../type/type";
import "./Card.css";
import clsx from "clsx";

export const Card = ({film}: CardProps) => {
  return (
    <>
    <Link to={`/DetailsMovies/${film.id}`}>
      <img className="cardImg" 
      src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} 
      alt="poster du film" />
    </Link>
    </>
  );
};