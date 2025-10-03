// import { useEffect, useState } from "react";
import "./Home.css";
import { useFetch } from "../../Fetch/FetchAPI";
import type { responsTypeM } from "../../type/type";
import { Header } from "../../Header/Header";
import { Banner } from "../../banner/Banner";
import { Carousel } from "../../carousel/Carousel";
// import { useFetchDetailsS } from "../../Fetch/FetchDetailsSeries";


export const Home = () => {

  // const [joke, setJoke] = useState<string | undefined>(undefined);

  const FetcherPopular = useFetch<responsTypeM>('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'); // appelle ma const Fetch de Fetch.tsx

  const FetcherTopRated = useFetch<responsTypeM>('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');

  const FetcherUpComing = useFetch<responsTypeM>('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');


  const genre = useFetch<responsTypeM>('https://api.themoviedb.org/3/genre/tv/list');
console.log(genre);

  // console.log(FetcherPopular?.results[1].title);
  // console.log("TopRated");
  // console.log("UpComing");
  // console.log(FetcherPopular?.results[].genre_ids);

  return (
    <>
      <Header />
      <Banner />

      <h3>Films les plus populaires</h3>
      {FetcherPopular && <Carousel Films={FetcherPopular?.results}/>}

      <h3>Films les mieux notés</h3>
      {FetcherTopRated && <Carousel Films={FetcherTopRated?.results}/>}

      <h3>Sorties à venir</h3>
      {FetcherUpComing && <Carousel Films={FetcherUpComing?.results}/>}
    </>
  );
};


