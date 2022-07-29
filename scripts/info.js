const allMovies = document.querySelectorAll(".movie");

allMovies.forEach((movie) => {
  movie.addEventListener("click", () => {
    console.log(window.location.href);
  });
});
