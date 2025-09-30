//fichier pour typer les réponses que je reçois

//typage de la respons de ce q je recup de l'API :
export interface responsType {
    page: number;
    results: resultsMoviesType[];
    total_pages: number;
    total_resutls: number;
};

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
};

export interface CarouselProps {
    Films: resultsMoviesType[];
};

export interface CardProps {
    film: resultsMoviesType;
};