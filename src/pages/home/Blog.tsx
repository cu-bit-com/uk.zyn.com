import React from "react";
import styles from "./Blog.module.css";
import heroBanner from "../../images/Temp_banner.jpg";
import global from "../../components/Global.module.css";
import { Link } from "react-router-dom";
import image_one from "../../images/discover/Commute.png";
import image_two from "../../images/discover/Office.png";
import image_three from "../../images/discover/Game.png";

function BlogSection() {
  return (
    <div className={global.wrapper}>
      <div className={styles.blog_wrapper}>
        <h3>Blog Articles</h3>
        <div className={styles.blog_container}>
          <div className={styles.blog_item}>
            <div className={styles.blog_img}>
              <img src={image_one} alt="banner" />
            </div>
            <div className={styles.blog_info}>
              <h3 className={styles.blogTitle}>How Do Nicotine Pouches Work?</h3>
              <Link className={styles.itemLink} to="/blog">
                Read more
              </Link>
            </div>
          </div>
          <div className={styles.blog_item}>
            <div className={styles.blog_img}>
              <img src={image_two} alt="banner" />
            </div>
            <div className={styles.blog_info}>
              <h3 className={styles.blogTitle}>What Happens If You Swallow a ZYN Spit</h3>
              <Link className={styles.itemLink} to="/blog">
                Read more
              </Link>
            </div>
          </div>
          <div className={styles.blog_item}>
            <div className={styles.blog_img}>
              <img src={image_three} alt="banner" />
            </div>
            <div className={styles.blog_info}>
              <h3 className={styles.blogTitle}>ZYN Nicotine Pouches Dietary Information</h3>
              <Link className={styles.itemLink} to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
