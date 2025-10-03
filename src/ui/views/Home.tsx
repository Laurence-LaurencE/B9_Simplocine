import { ContenTypeEnum, type RequestMovieList } from "../../core/type";
import { useMovieConnection } from "../../core/fetch";
import { Carousel } from "../carousel/Carousel";
import { Banner } from "../banner/Banner";
import { useMovieCast } from "../../core/fetchcast";

function Home() {
  const randomPage = Math.floor(Math.random() * 50) + 1;

  const filmsPopular = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/movie/popular?page=${randomPage}`
  );

  const filmsNotes = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/movie/top_rated?page=${randomPage}`
  );

  const filmsAvenir = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/movie/upcoming?page=${randomPage}`
  );
  

  return (
    <>
      <Banner />
      <h3>Films les plus populaires</h3>
      {filmsPopular && (
        <Carousel
          content={filmsPopular.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Films les mieux notés</h3>
      {filmsNotes && (
        <Carousel
          content={filmsNotes.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Sorties à venir</h3>
      {filmsAvenir && (
        <Carousel
          content={filmsAvenir.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
    </>
  );
}

export default Home;
