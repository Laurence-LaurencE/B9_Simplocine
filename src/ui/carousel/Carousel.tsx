import "./Carousel.css";
import clsx from "clsx";
import { Card } from "../card/Card";
import type { CarouselProps } from "../type/type";



export const Carousel = ({Films}: CarouselProps) => {

    // return <>
    // <ul className="carousel">
    //     <li><Card/></li>
    //     <li><Card/></li>
    //     <li><Card/></li>
    //     <li><Card/></li>
    //     <li><Card/></li>
    //     <li><Card/></li>
    // </ul>
    // </>

    return <>
        <ul className="carousel">
            {/* parcourir le tableau results pour lire chacunes des propriétés de cahque enregistrment(ligne) */}
            {
                Films.map((film) => (
                    <li key={film.id}>
                        <Card film={film}/>
                    </li>
                )
                )
            }

        </ul>
    </>
};

