import { useParams } from "react-router-dom";
import { useMovieDetail } from "../core/fetchDetail";
import { ContenTypeEnum, type ResultSeries } from "../core/type";

function SeriesDetail() {
  const { id } = useParams<{ id: string }>();
  const series = useMovieDetail<ResultSeries>(id, ContenTypeEnum.SERIE);


  return (
    <div style={{ padding: "2rem" }}>
      <h2>{series?.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${series?.poster_path}`}
        alt={series?.name}
      />
      <p>
        Date de sortie : {series?.first_air_date}
      </p>
      <p>
        Note moyenne : {series?.vote_average}
      </p>
      <p>{series?.overview}</p>
    </div>
  );
}

export default SeriesDetail;
