import styles from "./Portfolio.module.scss";

const PortfolioVideo = (props) => {
  return (
    <video
      className={styles.portfolio__video__content}
      loop
      autoPlay
      muted
      preload="none"
    >
      <source src={props.mp4Url} type="video/webm" />
      <source src={props.webmUrl} type="video/mp4" />
    </video>
  );
};

export default PortfolioVideo;
