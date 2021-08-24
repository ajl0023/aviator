import { rendergallerySlider } from "../../gallerySlider/gallerySlider";
import { renderhybridCarousel } from "../hybridCarousel/hybridCarousel";
import { renderhybridImage } from "../hybridImage/hybridImage";
import { renderquote } from "../quote/quote";
import { renderSocialBar } from "../socials/socials";
import { renderVideoPage } from "../videoRender/videoRender";
import styles from "./wrapper.module.scss";

const element = document.createElement("div");

export const renderwrapper = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <div id="scroll-header" class=${styles["scroll-header"]}></div>
      <div class=${styles["content-container"]}>
        ${renderquote()}${rendergallerySlider(
          "gallery-container",
          ""
        )}${renderhybridImage(0)}
        ${renderhybridCarousel()} ${renderhybridImage(1)} ${renderVideoPage()}
        ${renderSocialBar()}
      </div>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
//         //
//  <div class=${styles["content-container"]}>
//         ${rendergallerySlider("gallery-container", "")}
//
//         ${renderSocialBar()}
//       </div>
