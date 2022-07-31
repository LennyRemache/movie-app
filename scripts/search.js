const search_btn = document.querySelector(".bi-search");
const search_container = document.querySelector(".search-container");
const search_bar = document.querySelector("#search-bar");
const search_list = document.querySelector(".search-results");

search_container.addEventListener("click", (e) => {
  search_container.style.display = "none";
  search_bar.value = "";
});

search_btn.addEventListener("click", () => {
  search_container.style.display = "initial";
  search_bar.focus();
});

search_bar.addEventListener("click", (e) => {
  e.stopPropagation();
  // prevent a click on the search bar from causing bubbling
  // event to occur where the child and all parent elements also get clicked
  // in this case the parent is the search-container
});

search_bar.addEventListener("input", () => {
  search_list.style.display = "inherit";

  setTimeout(async () => {
    let search = undefined;
    const title = search_bar.value;
    if (title !== "") {
      try {
        search = await searchMovie(title);
        console.log("searching for ", title);
        let MAX_SEARCH_RESULTS = 5;
        if (
          search.results.length < MAX_SEARCH_RESULTS &&
          search.results.length > 0
        ) {
          MAX_SEARCH_RESULTS = search.results.length;
          renderSearchedMovie(search, MAX_SEARCH_RESULTS);
        } else if (search.results.length > MAX_SEARCH_RESULTS) {
          renderSearchedMovie(search, MAX_SEARCH_RESULTS);
        }
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  }, 1500);
});

async function searchMovie(title, page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=${page}&include_adult=false&region=US`
  );
  const data = await res.json();
  return data;
}

function renderSearchedMovie(search, amount) {
  let movieList = "";
  for (let i = 0; i < amount; i++) {
    movieList += `
        <li>
            <img class="search-item movie" src="https://image.tmdb.org/t/p/original${
              search.results[i].poster_path
            }" name="${search.results[i].id}" />
            <p>
                <span class="search-title">${search.results[i].title}</span> 
                <br />
                <span class="search-release-year">${search.results[
                  i
                ].release_date.slice(0, 4)}</span>
                <br />
                <span class="search-length"></span>
             </p>
        </li>`;
  }
  search_list.innerHTML = movieList;
  getAllMovies();
}
