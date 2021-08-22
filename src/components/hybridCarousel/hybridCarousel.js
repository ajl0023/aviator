import styles from "./hybridCarousel.module.scss";
import fireImage from "../../images/Goodyear-WoolseyFire.jpg";
import { rendergallerySlider } from "../../gallerySlider/gallerySlider";

export const renderhybridCarousel = (fragment) => {
  const element = /* HTML */ `
    <div style="margin-top:230px" class=${styles["container"]}>
      <div class=${styles["content-container"]}>
        <div class=${styles["content-image"]}>
          ${rendergallerySlider("hybrid-gallery-container", "hybrid")}
        </div>
      </div>
      <div class=${styles["banner-container"]}>
        <div class=${styles["placeholder"]}></div>
        <div class=${styles["text-container"]}>
          <h5>The Concept</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            ipsam repellendus deleniti iusto, repellat fuga sequi consectetur
            possimus ea natus aliquid saepe adipisci veniam soluta impedit
            officia laboriosam eaque nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            ipsam repellendus deleniti iusto, repellat fuga sequi consectetur
            possimus ea natus aliquid saepe adipisci veniam soluta impedit
            officia laboriosam eaque nihil.
          </p>
        </div>
      </div>
    </div>
  `;

  return element;
};
