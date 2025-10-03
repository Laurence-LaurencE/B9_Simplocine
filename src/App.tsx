import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import { Home } from "./ui/views/home/Home";
import { MoviesList } from "./ui/views/moviesList/MoviesList";
import { DetailsMovie } from "./ui/views/detailsMovie/DetailsMovie";
import { DetailsSerie } from "./ui/views/detailsSerie/detailsSerie";
import { SeriesList } from "./ui/views/seriesList/SeriesList";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/MoviesList" element={<MoviesList />} />
        <Route path="/DetailsMovies/:id" element={<DetailsMovie />}/>

        <Route path="/SeriesList" element={<SeriesList />} />
        <Route path="/DetailsSerie/:id" element={<DetailsSerie />}/>

      </Routes>
    </BrowserRouter>
  );
};

