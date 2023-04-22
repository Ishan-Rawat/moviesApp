//specifies where we can get the API from
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cab552ed1eefd3ef30523dccec5eda08&page=1'; 
//specifies the path for "the" image
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'; 
//specifies how we are going to search for something and get results from the API
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=cab552ed1eefd3ef30523dccec5eda08&query="; //in the string that follows "query=" we put the query that the user enters in the search box on our page 
/* What do we want our code to do:
* When we enter a query in the search field we want our JS code to append that query to the SEARCHAPI const
* and then dynamically create the HTML elements required to properly show the results back to the user.(we are basically going to create the same stuff that we commented in the index.html file)
*/  

const main = document.getElementById('section'); 
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_col = document.createElement('div');
            div_col.setAttribute('class', 'column');

            const center =  document.createElement('center');

            const title = document.createElement('h3');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_col.appendChild(div_card);
            div_row.appendChild(div_col);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();//This method cancels the event, meaning the default action specified for the event wont be taken(written from web)
    //In the MDN example they used this method with an if condition. From my understanding here(in this code) the event gets canceled
    //always.
    // We may be doing this because the default action for submit when form element doesnt have action attribute(our case) is to 
    //append the current URL with the form input. We dont want this here
    main.innerHTML = ''; //When a new search is made this will remove the previous results
    
    const searchItem = search.value;
    
    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});