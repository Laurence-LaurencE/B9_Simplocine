import { Link } from "react-router";
import type { CardSerieProps } from "../type/type";
import "./Card.css";
import clsx from "clsx";


//normalment la props doit se trouver ici.

export const CardSeries = ({serie}: CardSerieProps) => {
    return (
        <>
        <Link to={`/DetailsSerie/${serie.id}`}>
        <img className="CardImg" 
        src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} 
        alt="poster de la série" />
        </Link>
        </>
    );
};
