const allMovies = document.querySelectorAll(".movie");
const newNode = document.importNode(allMovies, true);

const selectedBackdrop = document.querySelector(".selected-backdrop-img");
const selectedPoster = document.querySelector(".selected-poster-img");
console.log(selectedBackdrop);
console.log(selectedPoster);
console.log(allMovies);

// console.log(allMovies);
// allMovies.forEach((movie) => {
//   movie.addEventListener("click", () => {
//     renderInfo(movie);
//     let path = window.location.pathname.split("/");
//     path[path.length - 1] = "info.html";
//     path = path.join("/");
//     window.location.pathname = path;
//   });
// });

// function renderInfo(movie) {
//   console.log(movie);

//   //console.log(selectedBackdrop);
//   //selectedBackdrop.setAttribute("src", movie.getAttribute("src"));
//   //console.log(movie.getAttribute("src"));
// }
