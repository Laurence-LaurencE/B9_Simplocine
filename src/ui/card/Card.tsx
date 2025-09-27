import "./Card.css";
import type { ResultMovie } from "../../core/type";
import { Link } from "react-router-dom";

interface CardProps {
  film: ResultMovie;
}

export const Card = ({ film }: CardProps) => {
  return (
    <Link to={`/movie/${film.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
          alt={film.title}
        />
        <h4>{film.title}</h4>
      </div>
    </Link>
  );
};
