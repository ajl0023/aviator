import logo from "../../images/Alec Aviator Logo.png";
import styles from "./Home.module.scss";
const element = document.createElement("div");

export const renderHome = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <div class=${styles["fade-cover"]}></div>
      <img class=${styles["logo"]} src=${logo} alt="" />
    </div>
  `;
  
  fragment.appendChild(element.firstElementChild);
};
