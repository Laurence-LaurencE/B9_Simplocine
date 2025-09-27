import "./Carousel.css";
import { useRef } from "react";
import { Card } from "../card/Card";
import type { ResultMovie } from "../../core/type";

interface CarouselProps {
  films: ResultMovie[];
}

export const Carousel = ({ films }: CarouselProps) => {
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
        {films.map((film) => (
          <li key={film.id}>
            <Card film={film} />
          </li>
        ))}
      </ul>

      <button className="arrow right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
};
