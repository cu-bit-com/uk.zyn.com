import global from "../../components/Global.module.css";
import styles from "./BlogSection.module.css";
import { Link } from "react-router-dom";
import image_one from "../../images/discover/Commute.png";
import image_two from "../../images/discover/Office.png";
import image_three from "../../images/discover/Game.png";

function BlogSection() {
  return (
    <div className={global.wrapper}>
      <br />
      <br />
      <h3>Find out more on our Blog Articles</h3>
      <br />
      <br />
      <div className={styles.sectionWrapper}>
        <Link className={styles.blogLink} to="#">
          <div className={styles.card}>
            <img className={styles.articleImg} src={image_one} alt="" />
            <h3>How Do Nicotine Pouches Work?</h3>
          </div>
        </Link>
        <Link className={styles.blogLink} to="#">
          <div className={styles.card}>
            <img className={styles.articleImg} src={image_two} alt="" />
            <h3>What Happens If You Swallow a ZYN Spit</h3>
          </div>
        </Link>
        <Link className={styles.blogLink} to="#">
          <div className={styles.card}>
            <img className={styles.articleImg} src={image_three} alt="" />
            <h3>ZYN Nicotine Pouches Dietary Information</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogSection;
