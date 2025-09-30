import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import ListSeries from "./pages/ListSeries";
import ListMovie from "./pages/ListMovie";
import Home from "./pages/Home";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/listfilms" element={<ListMovie />} />
      <Route path="/listseries" element={<ListSeries />} />
    </Routes>
  );
};
