import styles from "./hybridImage.module.scss";
import fireImage from "../../images/Goodyear-WoolseyFire.jpg";
import cayman from "../../images/renders/CAYMAN AVIATOR 20210722 (6).jpg";
const eles = [
  {
    img: fireImage,
    text: /* HTML */ `<h5>The Background</h5>
      <p>
        The 2019 Woolsey Malibu fire wiped out many structures, one of which was
        a dome-like building (like an observatory). What was left was a secluded
        property with a breathtaking 360-degree view of the Pacific Ocean and
        the Malibu mountains.
      </p>
      <p>
        Apel Design accepted the challenge of creating a piece of architecture
        that would have a minimal environment impact and yet evoke and complete
        the site conditions. The site dictated three major criteria, first that
        it was a fire-rebuilt home, second the challenges of accessibility to
        the site and finally, it must be an “off the grid” home.
      </p>`,
    classes: "extra-padding",
  },
  {
    img: cayman,
    text: /* HTML */ `<h5>The Impact</h5>
      <p>
        Conceptually, Apel Design wanted to create the notion that the
        architecture of building continues beyond, in a sense, the forms flow
        throughout and never stop. The architecture forms emerge from the ground
        extent to the horizon and divide into two beautiful irregular volumetric
        elements as if the architecture was slicing the space emphasizing the
        gorgeous views of the Malibu mountains and the Pacific Ocean.
      </p>
      <p>
        The bird-like building program also incorporates the ideas of flow and
        continuation; the first level proposes an open floor plan with a glass
        facade that opens up the space to beautiful deck and a second floor for
        bedroom that are elevated from the ground to again emphasize this notion
        of flow and lightness.
      </p>`,
  },
];
export const renderhybridImage = (i) => {
  const element = /* HTML */ `
    <div
      style=${i === 0 ? "margin-top:200px" : "margin-top:220px"}
      class=${styles["container"]}
    >
      <div class=${styles["content-image-container"]}>
        <img
          src=${eles[i].img}
          class="${styles["content-image"] + " " + styles[eles[i].classes]}"
          alt=""
        />
      </div>

      <div class=${styles["banner-container"]}>
        <div class=${styles["banner-content"]}>
          <div class=${styles["text-content-container"]}>${eles[i].text}</div>
        </div>
      </div>
    </div>
  `;
  return element;
};
//           // <div class=${styles["text-content-container"]}>${eles[i].text}</div>
