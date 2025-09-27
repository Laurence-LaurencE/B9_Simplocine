import "./Card.css";
import type { ResultMovie } from "../core/type";

interface CardProps {
  film: ResultMovie;
}

export const Card = ({ film }: CardProps) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
        alt={film.title}
      />
      <h4>{film.title}</h4>
    </div>
  );
};
