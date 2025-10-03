import { CardMovies } from "../card/CardMovies";
import type { CarouselMovieProps} from "../type/type";
import "./Carousel.css";
// import clsx from "clsx";


export const Carousel = ({Films}: CarouselMovieProps) => {

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
                        <CardMovies film={film}/>
                    </li>
                )
                )
            }

        </ul>
    </>
};

