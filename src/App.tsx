import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import { Home } from "./ui/views/home/Home";
import { MoviesList } from "./ui/views/moviesList/MoviesList";
import { DetailsMovie } from "./ui/views/detailsMovie/DetailsMovie";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviesList" element={<MoviesList />} />
        <Route path="/DetailsMovies/:id" element={<DetailsMovie />}/>
      </Routes>
    </BrowserRouter>
  );
};
