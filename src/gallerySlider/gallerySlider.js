import styles from "./gallerySlider.module.scss";
const cache = {};
const bluePrintImagesCache = {};
function importAll(imports) {
  imports.forEach((r) => {
    r.keys().forEach((key) => (cache[key] = r(key)));
  });
}

importAll([
  require.context("../images/renders", false, /\.(png|jpe?g|svg)$/),
  require.context("../images/blueprints", false, /\.(png|jpe?g|svg)$/),
]);

const renders = Object.keys(cache).map((name) => {
  return cache[name];
});

export const rendergallerySlider = (className, location) => {
  const element = /* HTML */ `
    <div class=${styles[className]}>
      <div class="splide">
        <div class="splide__track">
          <ul class="splide__list"></ul>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = element;
  const sliderContainer = container.getElementsByTagName("ul");
  console.log(location === "hybrid" ? 5 : renders.length, "testing");
  for (
    let i = location === "hybrid" ? 5 : 0;
    i < (location === "hybrid" ? renders.length - 1 : 5);
    i++
  ) {
    const container = document.createElement("div");
    const slide = /* HTML */ ` <li class="splide__slide">
      <div class=${styles["image-container"]}>
        <img class=${styles["gallery-image"]} src=${renders[i]} alt="" />
      </div>
    </li>`;
    container.innerHTML = slide;
    sliderContainer[0].appendChild(container.firstElementChild);
  }

  return container.firstElementChild.outerHTML;
};
