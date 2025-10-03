import { useEffect, useState } from "react";
import type { CastMemberMovie, resultCastMenberMovie } from "./type";


export const useMovieCast = (id: string) => {
  const [cast, setCast] = useState<CastMemberMovie[]>([]);

  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits`;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc3NjcwZDVkMjgwNzc3YjIwM2U3YzU5ZTNiOTY5MSIsIm5iZiI6MTc1ODU0NTE3NS43NTYsInN1YiI6IjY4ZDE0NTE3ZTcxNjllNTBkMWNjMzkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-TW7283T-aXsLtGmZkdT-pkmPyz7yK4CsmM5tuVmmw",
          },
        };
        const result = await fetch(url, options);
        const data: resultCastMenberMovie = await result.json();
        console.log(data);
        
        setCast(data.cast || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCastMovie();
  }, [id]);

  return cast;
};