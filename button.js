const genre_info = document.querySelector(".combo");
const genre_group = document.querySelector(".genre_group");
const adult_all = document.querySelector(".adult");
const p_enter = document.querySelector(".enter");

// const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";
let clicked = [];
let adult = "";
function getMovie() {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=27b04d28b3c48267ca2d4119b0197e69&language=en-US`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      json.genres.map((genre) => {
        if (
          genre.name == "TV Movie" ||
          genre.name == "War" ||
          genre.name == "Family"
        ) {
        } else {
          const item = document.createElement("button");
          item.classList = "item_button button";

          item.innerText = genre.name;
          item.id = genre.id;
          genre_group.appendChild(item);
          item.addEventListener("click", function (event) {
             if(item.style.backgroundColor == "rgb(24, 39, 76)"){
              item.style.backgroundColor = "white";
              item.style.color = "rgb(24, 39, 76)";
              let find = clicked.findIndex((e) => e == genre.name);
              console.log(find);
              clicked.splice(find,1);
              } else{
                item.style.backgroundColor = "rgb(24, 39, 76)";
                item.style.color = "white"
                clicked.push(genre.name);
            }
          });
        }
      });
    });
}

function makesec() {
  const adults = document.createElement("button");
  adults.classList = "adults_button button";

  adults.innerText = "Adult";
  adult_all.appendChild(adults);
  adults.id = "adult";
  adults.addEventListener("click", function (event) {
    if(adults.style.backgroundColor == "rgb(24, 39, 76)"){
      adults.style.backgroundColor = "white";
      adults.style.color = "rgb(24, 39, 76)";
      adult = false;
    } else{
      adults.style.backgroundColor = "rgb(24, 39, 76)";
      adults.style.color = "white";
      adult = true;
    }
  });
  /*
  const every = document.createElement("button");
  every.classList = "every_button button";

  every.innerText = "All";
  adult_all.appendChild(every);
  every.id = "non-adult";
  every.addEventListener("click", function (event) {
    every.style.backgroundColor = "black";
    every.style.color = "white";
    adult = false;
  });
  */
}

function make_enter() {
  const next = document.createElement("button");
  next.innerText = "Enter";
  p_enter.appendChild(next);
  next.addEventListener("click", function (event) {
    localStorage.setItem("adult", adult);
    localStorage.setItem("clicked", JSON.stringify(clicked));
    location.href = "recommend.html";
  });
}

getMovie();
makesec();
make_enter();
