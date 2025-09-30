import { useMovieConnection } from "../core/fetch";
import type { RequestMovieList } from "../core/type";
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

  return (
    <>
      <Header />
      <Banner />
      <h3>Action</h3>
      {filmsAction && <Carousel films={filmsAction.results} />}
      <h3>Comédie</h3>
      {filmsComedy && <Carousel films={filmsComedy.results} />}
      <h3>Horreur</h3>
      {filmsHorror && <Carousel films={filmsHorror.results} />}
      <h3>Science-Fiction</h3>
      {filmsFiction && <Carousel films={filmsFiction.results} />}
      <h3>Drame</h3>
      {filmsDrama && <Carousel films={filmsDrama.results} />}
    </>
  );
}

export default ListMovie;
