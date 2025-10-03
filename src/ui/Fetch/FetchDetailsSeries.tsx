
import { useEffect, useState } from "react";



export const useFetchDetailsS = <T extends unknown> (id: string | undefined): T | undefined => {

  const [Series, setSeries] = useState<T>();


useEffect(() => {
    const fetchGetDatasAPI = async () => {
      try {
    
        const urlGenericDetails = `https://api.themoviedb.org/3/tv/${id}`;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjY4OWRkM2RkNzY3OTYyMDcwZWJlZDYwZDc1NjllMCIsIm5iZiI6MTc1ODU0NDQzOC40NDksInN1YiI6IjY4ZDE0MjM2NGI2YjAzYWU2YmZlOWE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2u0vvBwC2Z-B1XIznpn-8H85qv89mheJM4Z_5_smrJs",
          },
        };

        const responseFetch = await fetch(
          urlGenericDetails, options
        );

        const datas = await responseFetch.json();

        console.log("connexion réussi", datas);
        // return datas;
        setSeries(datas); //je range les données de l'API ds ma boite setFilm

      } catch (error) {
        console.log(error);
      }
    };

    fetchGetDatasAPI();
  }, []);


  return Series;

};

