const apiKey = "3bcfcbbd6f6ebf7821effeb075ae3ed6";

async function getInfo(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US&append_to_response=watch%2Fproviders`,
    { method: "GET" }
  );
  const data = await res.json();
  return data;
}

async function renderInfo() {
  const selectedBackdrop = document.querySelector(".selected-backdrop-img");
  const selectedPoster = document.querySelector(".selected-poster-img");
  const selectedTitle = document.querySelector(".selected-title");
  const selectedOverview = document.querySelector(".selected-overview");

  const movie_id = localStorage.getItem("SELECTED_MOVIE_ID");
  let movie = undefined;
  try {
    movie = await getInfo(movie_id);
  } catch (e) {
    console.log("Error: ", e);
  }
  selectedBackdrop.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  );
  selectedPoster.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movie.poster_path}`
  );
  selectedTitle.textContent = movie.title;
  selectedOverview.textContent = movie.overview;
}

renderInfo();
