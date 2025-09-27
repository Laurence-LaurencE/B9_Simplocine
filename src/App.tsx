import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import "./App.css";


export const App = () => {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};
