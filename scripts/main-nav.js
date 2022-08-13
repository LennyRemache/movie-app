const nowPlaying = document.querySelectorAll("#now-playing");
nowPlaying.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("nowPlayingPage", 1);
  });
});

const popular = document.querySelectorAll("#popular");
popular.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("popularPage", 1);
  });
});

const upcoming = document.querySelectorAll("#upcoming");
upcoming.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("upcomingPage", 1);
  });
});
