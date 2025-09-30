import { useMovieConnection } from "../core/fetch";
import type { RequestMovieList } from "../core/type";
import { Banner } from "../ui/banner/Banner";
import { Carousel } from "../ui/carousel/Carousel";
import { Header } from "../ui/Header/Header";

function ListSeries() {
  const randomPage = Math.floor(Math.random() * 200) + 1;

  const seriesAction = useMovieConnection<RequestMovieList>(
  `https://api.themoviedb.org/3/discover/tv?with_genres=10759&page=${randomPage}`
);

const seriesComedy = useMovieConnection<RequestMovieList>(
  `https://api.themoviedb.org/3/discover/tv?with_genres=35&page=${randomPage}`
);

const seriesHorror = useMovieConnection<RequestMovieList>(
  `https://api.themoviedb.org/3/discover/tv?with_genres=27&page=${randomPage}`
);

const seriesFiction = useMovieConnection<RequestMovieList>(
  `https://api.themoviedb.org/3/discover/tv?with_genres=10765&page=${randomPage}`
);

const seriesDrama = useMovieConnection<RequestMovieList>(
  `https://api.themoviedb.org/3/discover/tv?with_genres=18&page=${randomPage}`
);


  return (
    <>
      <Header />
      <Banner />
      <h3>Action</h3>
      {seriesAction && <Carousel films={seriesAction.results} />}
      <h3>Comédie</h3>
      {seriesComedy && <Carousel films={seriesComedy.results} />}
      <h3>Horreur</h3>
      {seriesHorror && <Carousel films={seriesHorror.results} />}
      <h3>Science-Fiction</h3>
      {seriesFiction && <Carousel films={seriesFiction.results} />}
      <h3>Drame</h3>
      {seriesDrama && <Carousel films={seriesDrama.results} />}
    </>
  );
}

export default ListSeries;
