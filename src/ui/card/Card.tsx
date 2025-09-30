import "./Card.css";
import type { ResultMovie } from "../../core/type";
import { Link } from "react-router-dom";

interface CardProps {
  content: ResultMovie;
}

export const Card = ({ content }: CardProps) => {
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
