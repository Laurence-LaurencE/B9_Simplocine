import { CarouselSeries } from "../../carousel/CarousselSeries";
import { useFetch } from "../../Fetch/FetchAPI";
import { Header } from "../../Header/Header";
import type { responsTypeS } from "../../type/type";


export const SeriesList = () => {

    // const FetcherSeriesListActionAdventure = useFetch<responsTypeS>('https://api.themoviedb.org/3/genre/tv/list?genre=10759&api_key=film.id');
    const FetcherSeriesListActionAdventure = useFetch<responsTypeS>('https://api.themoviedb.org/3/discover/tv?with_genres=10759&api_key=serie.id');

    // const FetcherSeriesListActionAnimation = useFetch<responsTypeS>();
     const FetcherSeriesListAnimation = useFetch<responsTypeS>('https://api.themoviedb.org/3/discover/tv?with_genres=16&api_key=serie.id');

    // const FetcherSeriesListComedy = useFetch<responsTypeS>();
    const FetcherSeriesListComedy = useFetch<responsTypeS>('https://api.themoviedb.org/3/discover/tv?with_genres=35&api_key=serie.id');

    
    // const FetcherSeriesListCrime = useFetch<responsTypeS>();
    const FetcherSeriesListCrime = useFetch<responsTypeS>('https://api.themoviedb.org/3/discover/tv?with_genres=80&api_key=serie.id');


    // const FetcherSeriesListDocumentary = useFetch<responsTypeS>();
    const FetcherSeriesListDocumentary = useFetch<responsTypeS>('https://api.themoviedb.org/3/discover/tv?with_genres=99&api_key=serie.id');


    // console.log(FetcherSeriesListActionAdventure);
    // console.log(FetcherSeriesListAnimation);
    // console.log(FetcherSeriesListComedy);
    // console.log(FetcherSeriesListCrime);
    console.log(FetcherSeriesListDocumentary);



    return(
        <>
        <Header />

        <h3>Séries genre : Action Adventure</h3>
        {FetcherSeriesListActionAdventure && <CarouselSeries Series={FetcherSeriesListActionAdventure.results}/>}

        <h3>Séries genre : Animation</h3>
        {FetcherSeriesListAnimation && <CarouselSeries Series={FetcherSeriesListAnimation?.results}/>}        

        <h3>Séries genre : Comedy</h3> 
        {FetcherSeriesListComedy && <CarouselSeries Series={FetcherSeriesListComedy.results}/>}

        <h3>Séries genre : Crime</h3>
        {FetcherSeriesListCrime && <CarouselSeries Series={FetcherSeriesListCrime?.results}/>}

        <h3>Séries genre : Documentaire</h3>
        {FetcherSeriesListDocumentary && <CarouselSeries Series={FetcherSeriesListDocumentary.results}/>}
        
        </>
    );
};
