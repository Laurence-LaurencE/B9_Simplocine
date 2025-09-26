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


