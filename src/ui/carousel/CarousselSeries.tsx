import { CardSeries } from "../card/CardSeries";
import type { CarouselSerieProps } from "../type/type";
import "./Carousel.css";
// import clsx from "clsx";


export const CarouselSeries = ({Series}: CarouselSerieProps) => {

    return <>
    <ul className="carousel">
        {
            Series.map((serie) => (
                <li key={serie.id}>
                    <CardSeries serie={serie}/>
                </li>
            ))
        }

    </ul>
    </>
};
