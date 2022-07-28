// https://image.tmdb.org/t/p/original/2u1YBNBlSwvBReyvI7i5z5ykQXP.jpg
// https://image.tmdb.org/t/p/original/[poster_path]
// the movie db API -> The Movie Database to retrieve movie searches

window.addEventListener("load", () => {
  renderTopTrending();
  renderPopMovies();
  renderUpcomingMovies();
  renderActionGenre();
});

const apiKey = "3bcfcbbd6f6ebf7821effeb075ae3ed6";

const movies = {
  getPopular: async function () {
    return await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&region=US`,
      { method: "GET" }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Successful Popular Movies API call!");
        } else {
          console.log("Failed Popular Movies API call!");
        }
        return res.json();
      })
      .then((data) => {
        const popMovieOne = data.results[0];
        const popMovieTwo = data.results[1];
        const popMovieThree = data.results[2];
        return [popMovieOne, popMovieTwo, popMovieThree];
      });
  },
  getTrending: async function () {
    return await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
      { method: "GET" }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Successful Trending Movies API call!");
        } else {
          console.log("Failed Trending Movies API call!");
        }
        return res.json();
      })
      .then((data) => {
        const trendingMovie = data.results[0];
        return trendingMovie;
      });
  },
  getUpcoming: async function () {
    return await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1&region=US`,
      { method: "GET" }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Successful Upcoming Movies API call!");
        } else {
          console.log("Failed Upcoming Movies API call!");
        }
        return res.json();
      })
      .then((data) => {
        const upcomingMovieOne = data.results[0];
        const upcomingMovieTwo = data.results[1];
        const upcomingMovieThree = data.results[2];
        return [upcomingMovieOne, upcomingMovieTwo, upcomingMovieThree];
      });
  },
  getAction: async function () {
    return await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=Action&with_watch_monetization_types=flatrate`,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const movieOne = data.results[0];
        const movieTwo = data.results[1];
        const movieThree = data.results[2];
        const movieFour = data.results[3];
        return [movieOne, movieTwo, movieThree, movieFour];
      });
  },
};

// renders the #1 Trending Movie at top of the page
async function renderTopTrending() {
  const trendingMovie = await movies.getTrending();
  const movieImage = document.querySelector(".popular-movie-img");
  movieImage.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`
  );
  const movieTitle = document.querySelector(".popular-movie-title");
  movieTitle.textContent = trendingMovie.title;
}

async function renderActionGenre() {
  const [movieOne, movieTwo, movieThree, movieFour] = await movies.getAction();
  const actionMovieImages = document.querySelectorAll(".action-movie-img");
  actionMovieImages[0].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movieOne.backdrop_path}`
  );
  actionMovieImages[1].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movieTwo.backdrop_path}`
  );
  actionMovieImages[2].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movieThree.backdrop_path}`
  );
  actionMovieImages[3].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movieFour.backdrop_path}`
  );
}

// renders the 3 most popular movies into thw carousal containing popular movies
async function renderPopMovies() {
  const [popMovieOne, popMovieTwo, popMovieThree] = await movies.getPopular();
  const popularMovieImages = document.querySelectorAll(".popular-movie-image");
  popularMovieImages[0].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${popMovieOne.backdrop_path}`
  );
  popularMovieImages[1].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${popMovieTwo.backdrop_path}`
  );
  popularMovieImages[2].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${popMovieThree.backdrop_path}`
  );
}

// renders 3 upcoming movies into the carousal containing upcoming movies
async function renderUpcomingMovies() {
  const [upcomingMovieOne, upcomingMovieTwo, upcomingMovieThree] =
    await movies.getUpcoming();
  const upcomingMovieImages = document.querySelectorAll(".upcoming-movie-img");
  upcomingMovieImages[0].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${upcomingMovieOne.backdrop_path}`
  );
  upcomingMovieImages[1].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${upcomingMovieTwo.backdrop_path}`
  );
  upcomingMovieImages[2].setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${upcomingMovieThree.backdrop_path}`
  );
}

//10749
