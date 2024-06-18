import styles from "./Content.module.css";
import global from "../../components/Global.module.css";
import image from "../../images/home/citrus_bag.jpg";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className={global.wrapper}>
      <div className={styles.discover_zyn}>
        <div className={styles.discover_zyn_info}>
          <h3>Where to Buy ZYN?</h3>
          <p className={styles.p}>
            Discover a tobacco-free alternative to smoking filled with flavours
            and nicotine strengths designed to satisfy your taste
          </p>
          <button className={styles.learn_more} id={styles.moreBtn}>
            {" "}
            <Link to="/where-to-buy">Find ZYN</Link>
          </button>
        </div>
        <div className={styles.discover_zyn_img}>
          <img src={image} alt="ZYN Nicotine Pouches" />
        </div>
      </div>
      <div className={styles.explore_zyn}>
        <h3>Explore ZYN Products</h3>
        <p className={styles.p}>
		Choose from a wide range of unique flavours in different nicotine strengths and pouch sizes.</p>
      </div>
    </div>
  );
}

export default Content;
