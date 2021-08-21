import styles from "./Home.module.scss";
import homeImg from "../../images/home.jpg";
import logo from "../../images/Alec Aviator Logo.png";
const element = document.createElement("div");

export const renderHome = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div>
      <div class=${styles["container"]}>
        <img class=${styles["logo"]} src=${logo} alt="" />
      </div>
    </div>
  `;
  console.log(element.firstElementChild);
  fragment.appendChild(element.firstElementChild);
};
