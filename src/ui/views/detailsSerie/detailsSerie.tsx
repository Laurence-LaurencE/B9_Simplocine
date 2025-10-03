import { useFetchDetailsS } from "../../Fetch/FetchDetailsSeries";
// import type { detailsMovies } from "../../type/type";
// aremplacer par detailsSeries
import { Header } from "../../Header/Header";
import { useParams } from "react-router";
import "./DetailsSerie.css";


export const DetailsSerie = () => {
  const { id } = useParams<{ id: string }>();

  const FetcherDetailsSeries = useFetchDetailsS(id);
console.log(FetcherDetailsSeries);

  
  return (
    <>
      <Header />
      <h2>Title : </h2> 

      {/* <h2>Title : {FetcherDetailsMovies?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${FetcherDetailsMovies?.poster_path}`}
        alt={FetcherDetailsMovies?.title}
      />
      <p>Date de sortie : {FetcherDetailsMovies?.release_date}</p>
      <p>Note moyenne : {FetcherDetailsMovies?.vote_average}</p>
      <p>Description : {FetcherDetailsMovies?.overview}</p>

      <h3>casting du film avec photo membres pricipaux</h3>
      <h3>carousel films recommandés</h3> */}
    </>
  );
};
