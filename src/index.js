import Splide from "@splidejs/splide";
import "../main.scss";
import { renderHome } from "./components/home/Home";
import "./components/navbar/navbar";
import { renderNav } from "./components/navbar/navbar";
import { renderwrapper } from "./components/wrapper/wrapper";

const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
renderNav(docFrag);
renderHome(docFrag);

renderwrapper(docFrag);
document.body.appendChild(docFrag);
require("./scrollAnimation");

const styles = require("./gallerySlider/gallerySlider.module.scss").default;
var elms = document.getElementsByClassName("splide");

for (var i = 0, len = elms.length; i < len; i++) {
  if (i === 0) {
    new Splide(elms[i], {
      height: "auto",
      classes: {
        prev: styles["left"],
        next: styles["right"],
      },
    }).mount();
  } else {
    new Splide(elms[i], {
      height: "auto",
      pagination: false,
      classes: {
        prev: styles["hybrid-carousel-left"],
        next: styles["hybrid-carousel-right"],
      },
    }).mount();
  }
}
