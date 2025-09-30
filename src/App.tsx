import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import { Home } from "./ui/views/home/Home";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
