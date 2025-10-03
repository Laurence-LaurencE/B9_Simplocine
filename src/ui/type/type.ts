//fichier pour typer les réponses que je reçois

// import { Carousel } from "../carousel/Carousel";

//typage de la respons de ce q je recup de l'API :
export interface responsTypeM {
  page: number;
  results: resultsMoviesType[];
  total_pages: number;
  total_resutls: number;
}


export interface responsTypeS {
  page: number;
  results: resultsSeriesType[];
  total_pages: number;
  total_resutls: number;
}

export interface resultsMoviesType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number | null;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number | null;
  vote_count: number;
}

export interface resultsSeriesType {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number | null;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number | null;
  poster_path: string;
  vote_average: number | null;
  vote_count: number | null;
}

// Details MOVIE _________________________________
export interface detailsMovies {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: GenresMovie[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenresMovie {
  id: number;
  name: string;
}

export interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface production_countries {
  iso_3166_1: string;
  name: string;
}

export interface spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// Details SERIE _________________________________
export interface detailsSeries {
  adult: boolean | null;
  backdrop_path: string;
  created_by: Created_by[];
  episode_run_time: number [];
  first_air_date: string;
  genres: GenresSerie[];
  homepage: string;
  id: number | null;
  in_production?: boolean ;  //Defaults to true => ds le composant saisir { in_production = true }
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Last_episode_to_air[];
  name: string;
  next_episode_to_air: string;
  networks: Networks[];
  number_of_episodes: number | null;
  number_of_seasons: number | null;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number | null;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  seasons: Seasons[];
  spoken_languages: Spoken_languages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number | null;
  vote_count: number | null;
}

export interface Created_by {
  id: number | null;
  credit_id: string;
  name: string;
  gender: number | null;
  profile_path: string;
};

export interface GenresSerie {
  id: number | null;
  name: string;
}

export interface Last_episode_to_air {
  id: number;
  name: string;
  overview: string;
  vote_average: number | null;
  vote_count: number | null;
  air_date: string;
  episode_number: number | null;
  production_code: string;
  runtime: number | null;
  season_number: number | null;
  show_id: number | null;
  still_path: string;
}

export interface Networks {
  id: number | null;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_companies {
  id: number;                /// ???????   | null
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_countries {
  iso_3166_1: string;
  name: string;
}

export interface Seasons {
  air_date: string;
  episode_count: number | null;
  id: number | null;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number | null;
  vote_average: number | null;
}

export interface Spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}



// Carousel __________________________________
export interface CarouselMovieProps {
  Films: resultsMoviesType[];
}
export interface CarouselSerieProps {
  Series: resultsSeriesType[];
}

// Card __________________________________
export interface CardMovieProps {
  film: resultsMoviesType;
}

export interface CardSerieProps {
  serie: resultsSeriesType;
}

