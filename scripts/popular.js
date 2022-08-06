const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () => {
  localStorage.setItem("popularPage", parseInt(page) + 1);
  document.location.reload(true);
});

prevBtn.addEventListener("click", () => {
  localStorage.setItem("popularPage", parseInt(page) - 1);
  document.location.reload(true);
});

let page = localStorage.getItem("popularPage");
if (page === null) {
  page = 1;
  localStorage.setItem("popularPage", page);
}

if (parseInt(page) !== 1) {
  prevBtn.style.display = "initial";
} else {
  prevBtn.style.display = "none";
}

async function getPopular(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}&region=US`
  );
  const data = await res.json();
  return data.results;
}

window.addEventListener("load", async () => {
  let playingMovies = [];
  try {
    playingMovies = await getPopular(page);
    const nextPage = await getPopular((parseInt(page) + 1).toString());
    if (nextPage.length !== 0) {
      nextBtn.style.display = "initial";
    }
    //console.log(playingMovies.length);
    renderPopularPage(playingMovies);
  } catch (err) {
    console.log("Error: ", err);
  }
});

function renderPopularPage(movies) {
  const movieContainer = document.querySelector(".container");
  let movieLocation = "";
  movies.forEach((movie) => {
    if (movie.poster_path !== null) {
      movieLocation += `
        <div class="pop-row row movie" name="${movie.id}">
            <div class="col-5 col-lg-2">
                <img
                    class="img-fluid"
                    src="https://image.tmdb.org/t/p/original${movie.poster_path}"
                />
            </div>
            <div class="col-12 col-lg-10">
                <p>${movie.title}<br>${movie.overview}</p>
            </div>
        </div>
    `;
    }
  });
  movieContainer.innerHTML = movieLocation;
  getAllMovies();
}
