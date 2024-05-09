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
import { Link } from "react-router-dom";

function Images() {
  return (
    <div className={`${global.wrapper} ${styles.container}`}>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_one}></img>
        </div>
        <h3>ZYN Cool Mint Mini - 6mg</h3>
        <p>A cooling taste of menthol with hints of peppermint</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_two}></img>
        </div>
        <h3>ZYN Citrus Mini - 6mg</h3>
        <p>A taste of citrus fruits with hints of lemongrass</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_three}></img>
        </div>
        <h3>ZYN Espressino Mini - 6mg</h3>
        <p>A taste of freshly roasted coffee with hints of cocoa and caramel</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_four}></img>
        </div>
        <h3>ZYN Cool Mint 9.5mg - Slim</h3>
        <p>An intense cooling taste of fresh peppermint</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_five}></img>
        </div>
        <h3>ZYN Icy Mint 9.5mg - Slim</h3>
        <p>A cooling taste of eucalyptus and menthol</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_six}></img>
        </div>
        <h3>ZYN Cool Mint 11mg - Slim</h3>
        <p>An intense cooling taste of fresh peppermint</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_seven}></img>
        </div>
        <h3>ZYN Chili Guava 11mg - Slim</h3>
        <p>A fruity taste of guava and chili</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_eight}></img>
        </div>
        <h3>ZYN Icy Mint 12.5mg - Slim</h3>
        <p>A cooling taste of eucalyptus and menthol</p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <img src={image_nine}></img>
        </div>
        <h3>ZYN Icy Blackcurrant 12.5mg - Slim</h3>
        <p>
          A cooling taste of menthol topped with the flavour of dark berries
        </p>
        <Link className={styles.itemLink} to="/where-to-buy">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Images;