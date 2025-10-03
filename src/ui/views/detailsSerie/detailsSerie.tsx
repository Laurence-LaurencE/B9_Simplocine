import { useFetchDetailsS } from "../../Fetch/FetchDetailsSeries";
import type { detailsSeries } from "../../type/type";
// a remplacer par detailsSeries
import { Header } from "../../Header/Header";
import { useParams } from "react-router";
import "./DetailsSerie.css";


export const DetailsSerie = () => {
  const { id } = useParams<{ id: string }>();

  const FetcherDetailsSeries: detailsSeries | undefined = useFetchDetailsS<detailsSeries>(id);

console.log(FetcherDetailsSeries);

  
  return (
    <>
      <Header />
      
      <h2>Title : {FetcherDetailsSeries?.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${FetcherDetailsSeries?.poster_path}`}
        alt={FetcherDetailsSeries?.name}
      />
      {FetcherDetailsSeries && (
        <p>Saison : {FetcherDetailsSeries.seasons.map((season) => {
          return <span>{season.name}</span> 
        })}</p>
      )}
      
      <p>Note moyenne : {FetcherDetailsSeries?.vote_average}</p>
      <p>Description : {FetcherDetailsSeries?.overview}</p>

      <h3>casting de la série avec photo membres pricipaux</h3>
      <h3>carousel séries recommandées</h3>
    </>
  );
};
