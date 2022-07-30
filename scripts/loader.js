const loader = document.querySelector(".spinner-wrapper");
const body_el = document.getElementsByTagName("body")[0];
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.remove();
    body_el.style.overflowY = "scroll";
  }, 500);
});
