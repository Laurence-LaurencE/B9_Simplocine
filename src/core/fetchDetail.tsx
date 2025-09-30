import { useEffect, useState } from "react";
import { ContenTypeEnum } from "./type";

export const useMovieDetail = <T extends unknown>(
  id: string | undefined,
  type: ContenTypeEnum
): T | undefined => {
  const [films, setFilms] = useState<T>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let url = "";

        if (type === ContenTypeEnum.MOVIE) {
          url = `https://api.themoviedb.org/3/movie/${id}`;
        } else if (type === ContenTypeEnum.SERIE) {
          url = `https://api.themoviedb.org/3/tv/${id}`;
        }

        if (!url) return;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc3NjcwZDVkMjgwNzc3YjIwM2U3YzU5ZTNiOTY5MSIsIm5iZiI6MTc1ODU0NTE3NS43NTYsInN1YiI6IjY4ZDE0NTE3ZTcxNjllNTBkMWNjMzkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-TW7283T-aXsLtGmZkdT-pkmPyz7yK4CsmM5tuVmmw",
          },
        };
        const result = await fetch(url, options);
        const data = await result.json();
        console.log(data);

        setFilms(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  return films;
};
