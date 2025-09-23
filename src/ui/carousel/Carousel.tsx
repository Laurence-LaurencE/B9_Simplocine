import "./Carousel.css";
import clsx from "clsx";
import { Card } from "../card/Card";

export const Carousel = () => {

    return <>
    <ul className="carousel">
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
    </ul>
    </>
};
