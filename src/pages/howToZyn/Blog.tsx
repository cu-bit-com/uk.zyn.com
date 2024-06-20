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
		<div className={styles.titleContainer}>
        	<h3>News and blog.</h3>
		</div>
        <div className={styles.blog_container}>
          <div className={styles.blog_item}>
            <div className={styles.blog_info}>
              <span className={styles.blogTag}><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>Lorem, ipsum.</h3>
			  <p className={styles.blogDescription}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi perspiciatis dolorum nam, est laboriosam in mollitia quam ex recusandae explicabo.
			  </p>
            </div>
          </div>
          <div className={styles.blog_item}>
            <div className={styles.blog_info}>
              <span className={styles.blogTag}><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>Lorem, ipsum.</h3>
			  <p className={styles.blogDescription}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi perspiciatis dolorum nam, est laboriosam in mollitia quam ex recusandae explicabo.
			  </p>
            </div>
          </div>
          <div className={styles.blog_item}>
            <div className={styles.blog_info}>
              <span className={styles.blogTag}><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>Lorem, ipsum.</h3>
			  <p className={styles.blogDescription}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi perspiciatis dolorum nam, est laboriosam in mollitia quam ex recusandae explicabo.
			  </p>
            </div>
          </div>
		  <div className={styles.blog_item}>
            <div className={styles.blog_info}>
              <span className={styles.blogTag}><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>Lorem, ipsum.</h3>
			  <p className={styles.blogDescription}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi perspiciatis dolorum nam, est laboriosam in mollitia quam ex recusandae explicabo.
			  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
