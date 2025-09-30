import type { RequestMovieList } from "../../core/type";
import { useMovieConnection } from "../../core/fetch";
import { Link } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
  
  const randomPage = Math.floor(Math.random() * 200) + 1;



  const filmAleatoireBanner = useMovieConnection<RequestMovieList>(
    `https://api.themoviedb.org/3/movie/popular?page=${randomPage}`
  );

  return (
    <Link to={`/movie/${filmAleatoireBanner?.results[5].id}`}>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/w300${filmAleatoireBanner?.results[5].poster_path}`}
          alt="Image film a l'affiche"
        />
        <h2>{filmAleatoireBanner?.results[5].title}</h2>
      </div>
    </Link>
  );
};

