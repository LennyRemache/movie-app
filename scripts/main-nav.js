const nowPlaying = document.querySelector("#now-playing");
nowPlaying.addEventListener("click", () => {
  localStorage.setItem("nowPlayingPage", 1);
});

const popular = document.querySelector("#popular");
popular.addEventListener("click", () => {
  localStorage.setItem("popularPage", 1);
});
