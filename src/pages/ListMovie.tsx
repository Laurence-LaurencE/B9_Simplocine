import { useMovieConnection } from "../core/fetch";
import { ContenTypeEnum, type RequestMovieList } from "../core/type";
import { Banner } from "../ui/banner/Banner";
import { Carousel } from "../ui/carousel/Carousel";
import { Header } from "../ui/Header/Header";

function ListMovie() {
  const randomPage = Math.floor(Math.random() * 200) + 1;

  const filmsAction = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/discover/movie?with_genres=28&page=${randomPage}`
  );

  const filmsComedy = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/discover/movie?with_genres=35&page=${randomPage}`
  );

  const filmsHorror = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/discover/movie?with_genres=27&page=${randomPage}`
  );

  const filmsFiction = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/discover/movie?with_genres=878&page=${randomPage}`
  );

  const filmsDrama = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/discover/movie?with_genres=18&page=${randomPage}`
  );

  const films = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/genre/movie/list`
  );

  console.log(films);

  return (
    <>
      <Header />
      <Banner />
      <h3>Action</h3>
      {filmsAction && (
        <Carousel
          content={filmsAction.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Comédie</h3>
      {filmsComedy && (
        <Carousel
          content={filmsComedy.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Horreur</h3>
      {filmsHorror && (
        <Carousel
          content={filmsHorror.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Science-Fiction</h3>
      {filmsFiction && (
        <Carousel
          content={filmsFiction.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
      <h3>Drame</h3>
      {filmsDrama && (
        <Carousel
          content={filmsDrama.results}
          contentType={ContenTypeEnum.MOVIE}
        />
      )}
    </>
  );
}

export default ListMovie;
