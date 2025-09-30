import { Route, Routes } from "react-router-dom";
import SeriesDetail from "./pages/SeriesDetail";
import MovieDetail from "./pages/MovieDetail";
import ListSeries from "./pages/ListSeries";
import ListMovie from "./pages/ListMovie";
import Home from "./pages/Home";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listfilms" element={<ListMovie />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/listseries" element={<ListSeries />} />
      <Route path="/series/:id" element={<SeriesDetail />} />
    </Routes>
  );
};
