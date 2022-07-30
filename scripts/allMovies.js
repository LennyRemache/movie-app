const allMovies = document.querySelectorAll(".movie");

allMovies.forEach((movie) => {
  movie.addEventListener("click", () => {
    console.log(movie.getAttribute("name"));
    localStorage.setItem("SELECTED_MOVIE_ID", movie.getAttribute("name"));
    let path = window.location.pathname.split("/");
    path[path.length - 1] = "info.html";
    path = path.join("/");
    window.location.pathname = path;
  });
});
