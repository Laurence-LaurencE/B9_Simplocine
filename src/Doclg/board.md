### API TMBD: 
https://developer.themoviedb.org/reference/intro/authentication



### ========================================
### Dans Fetch.tsx :

### ma const responseFetch = await fetch("https://api.themoviedb.org/3/authentication"); est remplacée par :
## const responseFetch = await fetch(url, options); qui contient les 2 constantes : url et options.
=> fetch a maintenant 2 parametres : 
- l'url 
+ l'option (=le token & l'autorisaiton de d'utiliser json).

#  accept: 'application/json'   =  “Je veux que la réponse me soit envoyée en JSON”
# Authorization: 'Bearer ...'   = le token d’accès (clé API sécurisée).

export const App = () => {

  useEffect(() => {
    const fetchGetDatasAPI = async () => {
      try {


        const url = 'https://api.themoviedb.org/3/authentication';

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjY4OWRkM2RkNzY3OTYyMDcwZWJlZDYwZDc1NjllMCIsIm5iZiI6MTc1ODU0NDQzOC40NDksInN1YiI6IjY4ZDE0MjM2NGI2YjAzYWU2YmZlOWE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2u0vvBwC2Z-B1XIznpn-8H85qv89mheJM4Z_5_smrJs",
          },
        };

        const responseFetch = await fetch(
          url, options
        );

        const datas = await response.json();

        console.log(responseFetch);

        // setJoke(data.value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetDatasAPI();
  }, []);
};


## => console.log("connexion réussi", datas); 


  ### ===============================================


### typage => 
1/ interfaces 
2/ improter ds le fetch.tsx
3/ importer ds App.tsx



ds FetchAPI :
export const Fetch = <T extends unknown> (urlAPI:string): T | undefined => {}
=> on type la fonction avec T

___________________

=> 'FetcherPopular' is declared but its value is never read.ts(6133)
= a besoin d'un typage 


useState/useEffect

//je range les données de l'API ds ma boite setFilm
setFilms(datas); 
=> se déverse ds la boite Films
=> dc je return la boite Films.


###
{FetcherPopular && <Carousel Films={FetcherPopular?.results}/>}
&& = alors


### =============================================
### Construction des views :

### Home 
=> il faut migrer toute la structure de la page Home (depuis APp.tsx) vers la views Home.
  => renommer la const App => Home !
=> App.tsx ne contiendra plus que les routes.


### =======================================
ROUTES :
prévoir les routes pour chaque views ds App.tsx
 - 


### =======================================================
{genres: Array(16)}
genres
: 
Array(16)
0
: 
{id: 10759, name: 'Action & Adventure'}
1
: 
{id: 16, name: 'Animation'}
2
: 
{id: 35, name: 'Comedy'}
3
: 
{id: 80, name: 'Crime'}
4
: 
{id: 99, name: 'Documentary'}
5
: 
{id: 18, name: 'Drama'}
6
: 
{id: 10751, name: 'Family'}
7
: 
{id: 10762, name: 'Kids'}
8
: 
{id: 9648, name: 'Mystery'}
9
: 
{id: 10763, name: 'News'}
10
: 
{id: 10764, name: 'Reality'}
11
: 
{id: 10765, name: 'Sci-Fi & Fantasy'}
12
: 
{id: 10766, name: 'Soap'}
13
: 
{id: 10767, name: 'Talk'}
14
: 
{id: 10768, name: 'War & Politics'}
15
: 
{id: 37, name: 'Western'}
length
: 
16