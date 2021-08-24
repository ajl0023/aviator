import logo from "../../images/logo.svg";
import styles from "./navbar.module.scss";
const element = document.createElement("div");

export const renderNav = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["nav-wrapper"]}>
      <nav name="nav-container" class=${styles["container"]}>
        <div class=${styles["content-container"]}>
          <div class=${styles["logo-container"]}>
            <a href="https://www.apeldesign.com/">
              ${logo}
            </a>
          </div>
        </div>
      </nav>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
