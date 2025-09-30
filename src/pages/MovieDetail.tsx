import { ContenTypeEnum, type Moviedetail } from "../core/type";
import { useMovieDetail } from "../core/fetchDetail";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const film = useMovieDetail<Moviedetail>(id, ContenTypeEnum.MOVIE);


  return (
    <div style={{ padding: "2rem" }}>
      <h2>{film?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${film?.poster_path}`}
        alt={film?.title}
      />
      <p>
        Date de sortie : {film?.release_date}
      </p>
      <p>
        Note moyenne : {film?.vote_average}
      </p>
      <p>{film?.overview}</p>
    </div>
  );
}

export default MovieDetail;
