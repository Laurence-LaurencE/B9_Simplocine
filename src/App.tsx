import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./ui/Header/Header";
import { Banner } from "./ui/banner/Banner";
import { Carousel } from "./ui/carousel/Carousel";
import { Fetch } from "./ui/Fetch/FetchAPI";
import type { responsType } from "../type/type";

export const App = () => {

  // const [joke, setJoke] = useState<string | undefined>(undefined);

  const FetcherPopular: responsType = Fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'); // appelle ma const Fetch de Fetch.tsx

  const FetcherTopRated: responsType = Fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');

  const FetcherUpComing: responsType = Fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');




  console.log(FetcherPopular, "popular");
  console.log(FetcherTopRated, "TopRated");
  console.log(FetcherUpComing, "UpComing");
  



  return (
    <>
      <Header />
      <Banner />
      <h3>Films les plus populaires</h3>
      <Carousel />
      <h3>Films les mieux notés</h3>
      <Carousel />
      <h3>Sorties à venir</h3>
      <Carousel />
    </>
  );
};

