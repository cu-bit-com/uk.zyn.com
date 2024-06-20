import global from "../../components/Global.module.css";
import styles from "./TextLeft.module.css";
import desktop from "../../images/whichZyn/desktop_banner.png";
import mobile from "../../images/whichZyn/mobile_banner.jpg";

function TextLeft() {
  return (
    <div className={`${global.wrapper}`}>
      <br />
      <br />
      <h3>What is the difference between:<br/> Mini and Slim?</h3>
	  <div className={styles.bannerWrapper}>
		<img src={desktop} alt="" className={styles.desktopBanner} />
		<img src={mobile} alt="" className={styles.mobileBanner} />
	  </div>
    </div>
  );
}

export default TextLeft;
