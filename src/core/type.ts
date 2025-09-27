export interface RequestMovieList {
  page: number;
  results: ResultMovie[];
  total_pages: number;
  total_results: number;
}

export interface ResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_account: number;
}

export interface MovieDetailData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface Moviedetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genres[];
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

export interface Genres {
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
