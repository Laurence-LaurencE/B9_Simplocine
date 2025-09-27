import { useEffect, useState } from "react";

export const useMovieConnection = <T extends unknown>(
  url: string
): T | undefined => {
  const [films, setFilms] = useState<T>();

  useEffect(() => {
    const getData = async () => {
      try {
        const urlApi = url;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc3NjcwZDVkMjgwNzc3YjIwM2U3YzU5ZTNiOTY5MSIsIm5iZiI6MTc1ODU0NTE3NS43NTYsInN1YiI6IjY4ZDE0NTE3ZTcxNjllNTBkMWNjMzkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-TW7283T-aXsLtGmZkdT-pkmPyz7yK4CsmM5tuVmmw",
          },
        };
        const result = await fetch(urlApi, options);
        const data = await result.json();

        setFilms(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return films;
};
