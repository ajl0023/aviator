const scrollHeader = document.getElementById("scroll-header");
const navContainer = document.querySelector("nav");
const navLogo = navContainer.querySelector("svg");

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > 0) {
    scrollHeader.style.transform = `translateY(${navContainer.offsetHeight}px)`;
    navLogo.style.fill = "black";
  } else {
    navLogo.style.fill = "white";
    scrollHeader.style.transform = "translateY(0)";
  }
});
