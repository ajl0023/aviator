import styles from "./quote.module.scss";
import quote from "../../images/Phoenix Quote.png";

export const renderquote = (fragment) => {
  const element = /* HTML */ `
    <div class=${styles["container"]}>
      <div class=${styles["content-container"]}>
        <img class=${styles["content-image"]} src=${quote} alt="" />
      </div>
    </div>
  `;
  return element;
};
