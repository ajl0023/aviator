import { rendergallerySlider } from "../../gallerySlider/gallerySlider";
import styles from "./hybridCarousel.module.scss";

export const renderhybridCarousel = (fragment) => {
  const element = /* HTML */ `
    <div class=${styles["container"]}>
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
            Conceptually, Apel Design wanted to create the notion that the
            architecture of building continues beyond, in a sense, the forms
            flow throughout and never stop. The architecture forms emerge from
            the ground extent to the horizon and divide into two beautiful
            irregular volumetric elements as if the architecture was slicing the
            space emphasizing the gorgeous views of the Malibu mountains and the
            Pacific Ocean.
          </p>
          <p>
            The bird-like building program also incorporates the ideas of flow
            and continuation; the first level proposes an open floor plan with a
            glass facade that opens up the space to beautiful deck and a second
            floor for bedroom that are elevated from the ground to again
            emphasize this notion of flow and lightness.
          </p>
        </div>
      </div>
    </div>
  `;

  return element;
};
