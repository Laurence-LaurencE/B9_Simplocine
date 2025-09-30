import type { ResultMovie } from "../../core/type";
import { Link } from "react-router-dom";
import "./CardMovie.css";

interface CardProps {
  content: ResultMovie;
}

export const CardMovie = ({ content }: CardProps) => {
  return (
    <Link to={`/movie/${content.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w300${content.poster_path}`}
          alt={content.title}
        />
        <h4>{content.title}</h4>
      </div>
    </Link>
  );
};
