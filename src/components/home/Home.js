import logo from "../../images/Alec Aviator Logo.png";
import bgPhoto from "../../images/home.jpg";
import styles from "./Home.module.scss";
const element = document.createElement("div");

export const renderHome = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <div class=${styles["background-photo-container"]}>
        <div class=${styles["fade-cover"]}></div>
        <img src=${bgPhoto} class=${styles["background-photo"]} alt="" />
        <img class=${styles["logo"]} src=${logo} alt="" />
      </div>
    </div>
  `;

  fragment.appendChild(element.firstElementChild);
};
