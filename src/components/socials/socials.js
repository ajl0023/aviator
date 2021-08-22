import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";
import styles from "./socials.module.scss";
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

const imagesArr = Object.entries(cache).map((module) => module[0]);

export const renderSocialBar = (fragment) => {
  const element = /* HTML */ `
    <div class=${styles["container"]}>
      <div class=${styles["content-container"]}>
        <div>${instagram}</div>
        <div>${facebook}</div>
        <div>${twitter}</div>
        <div>${linkedin}</div>
      </div>
    </div>
  `;

  return element;
};
