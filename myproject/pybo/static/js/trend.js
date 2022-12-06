const movie_info = document.querySelector(".trend_movie");

const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";

function getMovie(query) {
  fetch(`https://api.themoviedb.org/3//trending/movie/day?api_key=${API_KEY}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      movie_info.style.display = "flex";
      movie_info.style.flexDirection = "row";

      json.results.map((v, i) => {
        const div = document.createElement("div");
        const title = document.createElement("div");
        const img = document.createElement("img");

        div.classList = `cover slide slide0${(i - (i % 5)) / 5 + 1}`;
        img.classList = "trend_img";

        if (i < 5) {
          div.classList.add("active");
        }
        title.innerText = v.title;
        img.src = `https://image.tmdb.org/t/p/w200/
${v.poster_path}`;

        movie_info.appendChild(div);
        div.appendChild(img);
        div.appendChild(title);
      });
    });
}

function init() {
  getMovie("comedy");
}

init();
