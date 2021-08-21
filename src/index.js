import "./components/navbar/navbar";
import "../main.scss";

import { renderNav } from "./components/navbar/navbar";
import { renderHome } from "./components/home/Home";
import { renderwrapper } from "./components/wrapper/wrapper";
import Splide from "@splidejs/splide";

const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
renderNav(docFrag);
renderHome(docFrag);

renderwrapper(docFrag);
document.body.appendChild(docFrag);
require("./scrollAnimation");
console.log(document.querySelector("div.splide"));

const styles = require("./gallerySlider/gallerySlider.module.scss").default;
var elms = document.getElementsByClassName("splide");
console.log(styles);
// new Splide(".splide", {
//   height: "auto",
//   arrows: "false",

//   cover: true,
//   classes: {
//     prev: styles["left"],
//     next: styles["right"],
//   },
// }).mount();
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
