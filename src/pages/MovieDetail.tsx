import { useParams } from "react-router-dom";
import { useMovieDetail } from "../core/fetchDetail";
import type { Moviedetail } from "../core/type";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const films = useMovieDetail<Moviedetail>(id);

  console.log(films);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{films?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${films?.poster_path}`}
        alt={films?.title}
      />
      <p>
        Date de sortie : {films?.release_date}
      </p>
      <p>
        Note moyenne : {films?.vote_average}
      </p>
      <p>{films?.overview}</p>
    </div>
  );
}

export default MovieDetail;
