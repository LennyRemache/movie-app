async function getNowPlaying(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}&region=US`
  );
  const data = await res.json();
  return data.results;
}

window.addEventListener("load", async () => {
  let page = localStorage.getItem("nowPlayingPage");
  let playingMovies = [];
  if (page === null) {
    page = 1;
    localStorage.setItem("nowPlayingPage", page);
  }
  try {
    playingMovies = await getNowPlaying(page);
    //console.log(playingMovies.length);
    renderNowPlayingPage(playingMovies);
  } catch (err) {
    console.log("Error: ", err);
  }
});

function renderNowPlayingPage(movies) {
  const movieContainer = document.querySelector(".container");
  let movieLocation = "";
  movies.forEach((movie) => {
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
  });
  movieContainer.innerHTML = movieLocation;
  getAllMovies();
}

const nextBtn = document.querySelector(".next-btn");
