import styles from "./wrapper.module.scss";

const element = document.createElement("div");

export const renderwrapper = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <div id="scroll-header" class=${styles["scroll-header"]}></div>
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
