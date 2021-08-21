import styles from "./videoRender.module.scss";

const element = document.createElement("div");

export const renderVideoPage = (i) => {
  const element = /* HTML */ `
    <div class=${styles["container"]}>
      <div class=${styles["content-image-container"]}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/iWGFuMg-RA0?enablejsapi=1&version=3&playerapiid=ytplayer"
          title="YouTube video player"
          id="main-video-player"
          z-index='5'
          allowfullscreen
        ></iframe>
      </div>

      <div class=${styles["banner-container"]}>
        <div class=${styles["banner-content"]}>
          <div class=${styles["text-content-container"]}>
          <h5>Video Render</h5>
          </div>
        </div>
      </div>
    </div>
  `;
  return element;
};
