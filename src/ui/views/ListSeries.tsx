import { ContenTypeEnum, type ResultSeriesList } from "../../core/type";
import { useMovieConnection } from "../../core/fetch";
import { Carousel } from "../carousel/Carousel";
import { Banner } from "../banner/Banner";

function ListSeries() {
  const randomPage = Math.floor(Math.random() * 200) + 1;

  const seriesAction = useMovieConnection<ResultSeriesList>(
    `https://api.themoviedb.org/3/discover/tv?with_genres=10759&page=${randomPage}`
  );

  const seriesComedy = useMovieConnection<ResultSeriesList>(
    `https://api.themoviedb.org/3/discover/tv?with_genres=35&page=${randomPage}`
  );

  const seriesAnimation = useMovieConnection<ResultSeriesList>(
    `https://api.themoviedb.org/3/discover/tv?with_genres=16&page=${randomPage}`
  );

  const seriesFiction = useMovieConnection<ResultSeriesList>(
    `https://api.themoviedb.org/3/discover/tv?with_genres=10765&page=${randomPage}`
  );

  const seriesDrama = useMovieConnection<ResultSeriesList>(
    `https://api.themoviedb.org/3/discover/tv?with_genres=18&page=${randomPage}`
  );

  return (
    <>
      <Banner />
      <h3>Action</h3>
      {seriesAction && (
        <Carousel
          content={seriesAction.results}
          contentType={ContenTypeEnum.SERIE}
        />
      )}
      <h3>Comédie</h3>
      {seriesComedy && (
        <Carousel
          content={seriesComedy.results}
          contentType={ContenTypeEnum.SERIE}
        />
      )}
      <h3>Animation</h3>
      {seriesAnimation && (
        <Carousel
          content={seriesAnimation.results}
          contentType={ContenTypeEnum.SERIE}
        />
      )}
      <h3>Science-Fiction</h3>
      {seriesFiction && (
        <Carousel
          content={seriesFiction.results}
          contentType={ContenTypeEnum.SERIE}
        />
      )}
      <h3>Drame</h3>
      {seriesDrama && (
        <Carousel
          content={seriesDrama.results}
          contentType={ContenTypeEnum.SERIE}
        />
      )}
    </>
  );
}

export default ListSeries;
