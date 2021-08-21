import styles from "./wrapper.module.scss";
import { renderquote } from "../quote/quote";
import { rendergallerySlider } from "../../gallerySlider/gallerySlider";
import { renderhybridImage } from "../hybridImage/hybridImage";
import { renderhybridCarousel } from "../hybridCarousel/hybridCarousel";

const element = document.createElement("div");

export const renderwrapper = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <div id="scroll-header" class=${styles["scroll-header"]}></div>
      ${renderquote()}
      <div class=${styles["content-container"]}>
        ${rendergallerySlider("gallery-container", "")} ${renderhybridImage(0)}
        ${renderhybridCarousel()} ${renderhybridImage(1)}
      </div>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
//         //  