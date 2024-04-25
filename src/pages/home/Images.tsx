import styles from "./Images.module.css";
import global from "../../components/Global.module.css";
import image_one from "../../images/products/4294.png";
import image_two from "../../images/products/4295.png";
import image_three from "../../images/products/4296.png";
import image_four from "../../images/products/4297.png";
import image_five from "../../images/products/4299.png";
import image_six from "../../images/products/4298.png";
import image_seven from "../../images/products/4302.png";
import image_eight from "../../images/products/4300.png";
import image_nine from "../../images/products/4301.png";

function Images() {
  return (
    <div className={`${global.wrapper} ${styles.container}`}>
      <img src={image_one} className={styles.item}></img>
      <img src={image_two} className={styles.item}></img>
      <img src={image_three} className={styles.item}></img>
      <img src={image_four} className={styles.item}></img>
      <img src={image_five} className={styles.item}></img>
      <img src={image_six} className={styles.item}></img>
      <img src={image_seven} className={styles.item}></img>
      <img src={image_eight} className={styles.item}></img>
      <img src={image_nine} className={styles.item}></img>
    </div>
  );
}

export default Images;
