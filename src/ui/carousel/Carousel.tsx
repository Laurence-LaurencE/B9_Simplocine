import type {
  CastMemberMovie,
  ResultMovie,
  ResultSeries,
} from "../../core/type";
import { CardSerie } from "../card-serie/CardSerie";
import { ContenTypeEnum } from "../../core/type";
import { CardMovie } from "../card/CardMovie";
import { useRef } from "react";
import "./Carousel.css";
import { CardCastMovie } from "../card-Cast/CardCastMovie";

type CarouselProps =
  | {
      content: ResultMovie[];
      contentType: ContenTypeEnum.MOVIE;
    }
  | {
      content: ResultSeries[];
      contentType: ContenTypeEnum.SERIE;
    }
  | {
      content: CastMemberMovie[];
      contentType: ContenTypeEnum.CAST;
    };

export const Carousel = ({ content, contentType }: CarouselProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={() => scroll("left")}>
        ◀
      </button>

      <ul className="carousel" ref={carouselRef}>
        {contentType === ContenTypeEnum.MOVIE &&
          (content as ResultMovie[]).map((item) => (
            <li key={item.id}>
              <CardMovie content={item} />
            </li>
          ))}

        {contentType === ContenTypeEnum.SERIE &&
          (content as ResultSeries[]).map((item) => (
            <li key={item.id}>
              <CardSerie content={item} />
            </li>
          ))}

        {contentType === ContenTypeEnum.CAST &&
          (content as CastMemberMovie[]).map((item) => (
            <li key={item.id}>
              <CardCastMovie content={item} />
            </li>
          ))}
      </ul>

      <button className="arrow right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
};
