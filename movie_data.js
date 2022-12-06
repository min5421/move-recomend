const movie_info = document.querySelector(".movie_data");
const movie_c_info = document.querySelector(".movie_recommend");
check = [];
const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";
//let mov = document.querySelector('.movie_data');

const movie_info_img = document.createElement("img");
const movie_info_title = document.createElement("div");
const movie_info_overview = document.createElement("div");
const movie_info_genre = document.createElement("div");

function getMovie2(query) {
    fetch(
      `https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}`
      )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        movie_info_img.src = `https://image.tmdb.org/t/p/w300/${json.poster_path}`;
        movie_info_title.innerText = json.title;
        movie_info_overview.innerText=json.overview;
        movie_info_img.classList = 'info_img';
        movie_info.appendChild(movie_info_img);
        movie_info_title.classList = 'info_title';
        movie_info.appendChild(movie_info_title);
    
        getGenre(json.genres);
        
        movie_info_overview.classList = 'info_overview';
        movie_info.appendChild(movie_info_overview);

      });
  }
  /*
function getMovie_Genre_id (query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json)
        const genre_id = json.results[0].genre_ids;
        getMovie_Genre (genre_id)
      });
  }
  */
  function getGenre (genres) {
    movie_info_genre.innerText = "";

    for(let j = 0; j < genres.length; j++){
          if(movie_info_genre.innerText != "")
            movie_info_genre.innerText += ", ";
        
            movie_info_genre.innerText += genres[j].name;
            movie_info_genre.classList = 'info_genre';
            movie_info.appendChild(movie_info_genre);
        }  
  }
  
  /*
function getMovie_Genre (id) {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        movie_info_genre.innerText = "";

        for(let j = 0; j < id.length; j++){
          
            json.genres.map((i)=>{
              if(id.includes(i.id)){
                if(movie_info_genre.innerText != "")
                  movie_info_genre.innerText += ", ";
              
                  movie_info_genre.innerText += i.name;
                  movie_info_genre.classList = 'info_genre';
                  movie_info.appendChild(movie_info_genre);
              }
          });

        }console.log(json.genres);
      });
  }

 */
  function getMovie(query,b) {
    
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity.desc&query=${query}&page=1&include_adult=${b}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {

        console.log(query);

        for (let i = 0; i < json.results.length; i++)
        {
          //console.log(`${json.results[i].title}`);
       
          const img = document.createElement("img");
          const title = document.createElement("div");
          img.src = `https://image.tmdb.org/t/p/w200/${json.results[i].poster_path}`;
          title.innerText = json.results[i].title;

          //영화 중복 출력하지 않도록 검사한다
          if(!check.includes(title.innerText)){  
            check.push(title.innerText);
          
            movie_c_info.appendChild(img);
            movie_c_info.appendChild(title);
          }

          img.addEventListener("click", function(e) {
            //let a = mov.children.length
            init2(json.results[i].id);
            
            //if (a > 0){
            //  for (let j = 0; j < a; j++){
            //      mov.removeChild(mov.children[j])
            //  }
            //}
          })
        }
      });
  }

  
  
function init2(id) {
    //console.log(title)
    getMovie2(id);
    //getMovie_Genre_id(title);
}
function init(L,b) {
  for (let i = 0; i < L.length; i++) {
    getMovie(L[i],b);
  }
}

var a = JSON.parse(localStorage.getItem("clicked"));
const b  = localStorage.getItem("adult")
init(a, b);



