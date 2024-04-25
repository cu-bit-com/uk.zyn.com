import styles from "./Content.module.css";
import global from "../../components/Global.module.css";
import image from "../../images/zyn-item.jpeg";

function Content() {
  return (
    <div className={global.wrapper}>
      <div className={styles.discover_zyn}>
        <div className={styles.discover_zyn_info}>
          <h3>Discover ZYN Nicotine Pouches</h3>
          <p className={styles.p}>
            Discover a tobacco-free alternative to smiking filled with flavours
            and nicotine strenghts designed to satisfy your taste.
          </p>
          <button className={styles.learn_more}>
            {" "}
            <a href="#">Learn More About ZYN</a>
          </button>
        </div>
        <div className={styles.discover_zyn_img}>
          <img src={image} alt="ZYN Nicotine Pouches" />
        </div>
      </div>
      <div className={styles.explore_zyn}>
        <h3>Explore ZYN Products</h3>
        <p className={styles.p}>
          If you are nicotine user looking for a new alternative, we suggest
          starting with a lower nicotine strenght, try our Mini (6mg) pouches.
          For nicotine pouch users, discover our Slim range!
        </p>
      </div>
    </div>
  );
}

export default Content;
