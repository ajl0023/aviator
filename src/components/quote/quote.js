import styles from "./quote.module.scss";


const element = document.createElement("div");

export const renderquote = (fragment) => {
  
  element.innerHTML = /* HTML */ `
    <div></div>
  `;
  fragment.appendChild(element.firstElementChild);
};
