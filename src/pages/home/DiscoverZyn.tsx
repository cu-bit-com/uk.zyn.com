import global from "../../components/Global.module.css";
import styles from "./DiscoverZyn.module.css";
import image_two from "../../images/home/2.png";
import image_three from "../../images/home/3.png";
import { Link } from "react-router-dom";



function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

function DiscoverZyn() {
  return (
    <div className={global.wrapper}>
      <h2 className={styles.title}>Discover ZYN</h2>
      <p>ZYN is an innovative alternative to smoking that provides a smoke and vapour free nicotine experience - wherever, whenever.</p>

      <div>
        <div className={styles.discoverWrapper}>
          <div className={styles.left}>
            <img className={styles.discoverImg} src={image_three} alt="" />
            <Link to="discover-zyn">
              <button className={global.ctaPrimary} onClick={scrollToTop}>Discover ZYN</button>
            </Link>
          </div>
          <div className={styles.right}>
            <img className={styles.discoverImg} src={image_two} alt="" />
            <Link to="where-to-buy">
              <button className={global.ctaPrimary} onClick={scrollToTop}>Where to Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverZyn;
