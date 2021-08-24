import fireImage from "../../images/Goodyear-WoolseyFire.jpg";
import cayman from "../../images/renders/CAYMAN AVIATOR 20210722 (6).jpg";
import styles from "./hybridImage.module.scss";
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
        Apel Design designed this project to have minimal environmental impact,
        this off-grid house will fully be powered by solar and biodiesel. The
        project will implement the latest technology to power the house. All the
        materials use will be LEED compliant to assure rigorous and
        implementation environmentally friendly materials.
      </p>
      <p>
        The Iconic Aviator at Malibu will be a seamless design and cutting-edge
        technological exploration that is sensible to the site and creates this
        balance of nature and man-made.
      </p>`,
  },
];
export const renderhybridImage = (i) => {
  const element = /* HTML */ `
    <div
   
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
        <div class=${styles["placeholder"]}></div>
        <div class=${styles["text-container"]}>${eles[i].text}</div>
      </div>
    </div>
  `;
  return element;
};
//           // <div class=${styles["text-content-container"]}>${eles[i].text}</div>
