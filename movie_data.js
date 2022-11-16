const movie_info = document.querySelector(".movie_data");
const movie_c_info = document.querySelector(".movie_recommend");
const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";
let mov = document.querySelector('.movie_data');

function getMovie2(query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`
      )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        
        const img = document.createElement("img");
        const title = document.createElement("div");
        const overview = document.createElement("div");
        img.src = `https://image.tmdb.org/t/p/w300/${json.results[0].poster_path}`;
        title.innerText = json.results[0].title;
        overview.innerText=json.results[0].overview;
        movie_info.appendChild(img);
        movie_info.appendChild(title);
        movie_info.appendChild(overview);

      });
  }
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
function getMovie_Genre (id) {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        json.genres.map((i)=>{console.log(i)
            if(id.includes(i.id)){
            const genre = document.createElement("div")
            genre.innerText= i.name;
            movie_info.appendChild(genre);
        }});
      });
  }

 
  function getMovie(query,b) {
    
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=${b}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        
        const img = document.createElement("img");
        const title = document.createElement("div");
        img.src = `https://image.tmdb.org/t/p/w200/${json.results[0].poster_path}`;
        title.innerText = json.results[0].title;
        movie_c_info.appendChild(img);
        movie_c_info.appendChild(title);
        
        img.addEventListener("click", function(e) {
            let a = mov.children.length
			init2(json.results[0].title)
			if (a > 0){
				for (let i=0;i<a;i++){
					mov.removeChild(mov.children[0])
				}
			}
        })
      });
  }

  
  
function init2(title) {
  console.log(title)
    getMovie2(title);
    getMovie_Genre_id(title);
}
function init(L,b) {
  for (let i = 0; i < L.length; i++) {
    getMovie(L[i],b);
  }
}

const a = localStorage.getItem("clicked") 

const b  = localStorage.getItem("adult")
init(a,b);



