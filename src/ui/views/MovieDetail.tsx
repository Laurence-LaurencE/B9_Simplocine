import { ContenTypeEnum, type Moviedetail } from "../../core/type";
import { useMovieDetail } from "../../core/fetchDetail";
import { useParams } from "react-router-dom";
import "./styleViews/MovieDetail.css";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const film = useMovieDetail<Moviedetail>(id, ContenTypeEnum.MOVIE);

  return (
    <div className="detail-page">
      <img
        src={`https://image.tmdb.org/t/p/w300${film?.poster_path}`}
        alt={film?.title}
      />
      <div className="detail-meta">
        <h2>{film?.title}</h2>
        <p>Date de sortie : {film?.release_date}</p>
        <p>Note moyenne : {film?.vote_average}</p>
        <p>{film?.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
