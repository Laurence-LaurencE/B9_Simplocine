import { Carousel } from "../../carousel/Carousel";
import { useFetch } from "../../Fetch/FetchAPI";
import { Header } from "../../Header/Header";
import type { responsTypeM } from "../../type/type";


export const MoviesList = () => {

    // const FetcherMoviesListGenre = useFetch('https://api.themoviedb.org/3/genre/movie/list?genre=28');

    const FetcherMoviesListAction = useFetch<responsTypeM>('https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=film.id');

    const FetcherMoviesListAdventure = useFetch<responsTypeM>('https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=film.id');

    const FetcherMoviesListAnimation = useFetch<responsTypeM>('https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=film.id');

    const FetcherMoviesListComedy = useFetch<responsTypeM>('https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=film.id');

    const FetcherMoviesListCrime = useFetch<responsTypeM>('https://api.themoviedb.org/3/discover/movie?with_genres=80&api_key=film.id');


    // console.log(FetcherMoviesListAction);
    // console.log(FetcherMoviesListAdventure);
    // console.log(FetcherMoviesListAnimation);
    // console.log(FetcherMoviesListComedy);
    console.log(FetcherMoviesListCrime);
    


    return(
        <>
        <Header />

        {/* genre_id !! key Etrangere */}
        <h3>Films genre 1 : Action</h3>
        {FetcherMoviesListAction && <Carousel Films={FetcherMoviesListAction.results}/>}

        <h3>Films genre 2 : Adventure</h3>
        {FetcherMoviesListAdventure && <Carousel Films={FetcherMoviesListAdventure.results}/>}

        <h3>Films genre 3 : Animation</h3>
        {FetcherMoviesListAnimation && <Carousel Films={FetcherMoviesListAnimation?.results}/>}

        <h3>Films genre 4 : Comedy</h3>
        {FetcherMoviesListComedy && <Carousel Films={FetcherMoviesListComedy?.results}/>}

        <h3>Films genre 5 : Crime</h3>
        {FetcherMoviesListCrime && <Carousel Films={FetcherMoviesListCrime?.results}/>}

        </>
    )
};
