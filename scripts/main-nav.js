const nowPlaying = document.querySelector("#now-playing");

nowPlaying.addEventListener("click", () => {
  localStorage.setItem("nowPlayingPage", 1);
});
