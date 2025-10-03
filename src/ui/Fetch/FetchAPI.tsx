
import { useEffect, useState } from "react";
// import type { responsTypeM } from "../type/type";


export const useFetch = <T extends unknown> (urlAPI:string): T | undefined => {

  const [Films, setFilms] = useState<T>();


useEffect(() => {
    const fetchGetDatasAPI = async () => {
      try {
        // const responseFetch = await fetch(
        //   "https://api.themoviedb.org/3/authentication"
        // );

        // Avant d'aller chercher l'url des films, il faut aller chercher l'url d'authetification pour tester:
        // const urlTestAuthentification = 'https://api.themoviedb.org/3/authentication';

        //Pour recup l'url des films : 2 solutions
        // soit un fetch par url de tye de films/sereis
        // soit un fetch generiq qui renvoie vers un parametre (=une boite) pour chque url.

        //   ex: ci-dessous pour le fetch spécifique :
        // const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

        //fetch generiq :       
        const urlGeneric = urlAPI;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjY4OWRkM2RkNzY3OTYyMDcwZWJlZDYwZDc1NjllMCIsIm5iZiI6MTc1ODU0NDQzOC40NDksInN1YiI6IjY4ZDE0MjM2NGI2YjAzYWU2YmZlOWE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2u0vvBwC2Z-B1XIznpn-8H85qv89mheJM4Z_5_smrJs",
          },
        };

        const responseFetch = await fetch(
          urlGeneric, options
        );

        const datas = await responseFetch.json();

        // console.log("connexion réussi", datas);
        // return datas;
        setFilms(datas); //je range les données de l'API ds ma boite setFilm

      } catch (error) {
        console.log(error);
      }
    };

    fetchGetDatasAPI();
  }, []);


  return Films;

};

