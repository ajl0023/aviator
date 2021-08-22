import quote from "../../images/Phoenix Quote.png";
import styles from "./quote.module.scss";

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
