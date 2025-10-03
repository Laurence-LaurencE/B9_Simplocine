import type { CastMemberMovie } from "../../core/type";

interface CardSerieProps {
  content: CastMemberMovie;
}

export const CardCastMovie = ({ content }: CardSerieProps) => {

  console.log(content);
  
  return (
    <div className="card-cast">
      <img
        src={
          content.profile_path
            ? `https://image.tmdb.org/t/p/w200${content.profile_path}`
            : "/placeholder.png"
        }
        alt={content.name}
      />
      <p>{content.name}</p>
      <p className="character">{content.character}</p>
    </div>
  );
};
