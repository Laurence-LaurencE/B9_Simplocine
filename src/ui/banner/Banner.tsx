import "./Banner.css";
import { useEffect, useState } from "react";

import { useFetch } from "../Fetch/FetchAPI";

export const Banner = () => {
  const data = useFetch<any>(
    "https://api.themoviedb.org/3/movie/popular?language=fr-FR"
  );

  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (data && data.results) {
      //random pour changement aleatoire
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setMovie(randomMovie);
    }
  }, [data]);

  return (
    <div className="banner">
      {movie && (
        <>
          <a href={`/detailsMovie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
            />
          </a>
          <h2>{movie.title}</h2>
        </>
      )}
    </div>
  );
};
