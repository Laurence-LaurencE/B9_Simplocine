import { Route, Routes } from "react-router-dom";
import SeriesDetail from "./ui/views/SeriesDetail";
import MovieDetail from "./ui/views/MovieDetail";
import ListSeries from "./ui/views/ListSeries";
import ListMovie from "./ui/views/ListMovie";
import Home from "./ui/views/Home";

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
