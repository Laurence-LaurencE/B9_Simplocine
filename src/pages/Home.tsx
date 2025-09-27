import type { RequestMovieList } from "../core/type";
import { useMovieConnection } from "../core/fetch";
import { Carousel } from "../ui/carousel/Carousel";
import { Banner } from "../ui/banner/Banner";
import { Header } from "../ui/Header/Header";


function Home() {
  const filmsPopular = useMovieConnection<RequestMovieList>(
    "https://api.themoviedb.org/3/movie/popular"
  );

  const filmsNotes = useMovieConnection<RequestMovieList>(
    "https://api.themoviedb.org/3/movie/top_rated"
  );

  const filmsAvenir = useMovieConnection<RequestMovieList>(
    "https://api.themoviedb.org/3/movie/upcoming"
  );

  return (
    <>
      <Header />
      <Banner />
      <h3>Films les plus populaires</h3>
      {filmsPopular && <Carousel films={filmsPopular.results} />}
      <h3>Films les mieux notés</h3>
      {filmsNotes && <Carousel films={filmsNotes.results} />}
      <h3>Sorties à venir</h3>
      {filmsAvenir && <Carousel films={filmsAvenir.results} />}
    </>
  );
}

export default Home;