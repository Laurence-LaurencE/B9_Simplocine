import type { ResultSeries } from "../../core/type";
import { Link } from "react-router-dom";
import "./CardSerie.css";

interface CardSerieProps {
  content: ResultSeries;
}

export const CardSerie = ({ content }: CardSerieProps) => {
  return (
    <Link to={`/series/${content.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w300${content.poster_path}`}
          alt={content.name}
        />
        <h4>{content.name}</h4>
      </div>
    </Link>
  );
};
