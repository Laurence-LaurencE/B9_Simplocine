import { useState } from "react";
import "./App.css";
import { Button } from "../src/ui/button/Button";
import { Header } from "./ui/Header/Header";
import { Banner } from "./ui/banner/Banner";
import { Carousel } from "./ui/carousel/Carousel";

export const App = () => {
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
