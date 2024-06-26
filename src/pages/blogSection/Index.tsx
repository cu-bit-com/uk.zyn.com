import React from "react";
import styles from "./Blog.module.css";
import global from "../../components/Global.module.css";
import { Link } from "react-router-dom";




function BlogSection() {
  return (
    <div className={global.wrapper}>
      <div className={styles.blog_wrapper}>
		<div className={styles.titleContainer}>
        	<h3 className={styles.largerFont}>News and blog.</h3>
		</div>

		<div className={styles.blog_container}>
        <Link className={`${styles.link} ${styles.blog_item}`} to="/how-do-nicotine-pouches-work">
            <div className={styles.blog_info}>
              <span><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>How do nicotine pouches work?</h3>
			  <p className={styles.blogDescription}>
			  	How do nicotine pouches work? And are they better than other smoke-free nicotine products? Learn how to use nicotine pouches properly here.
			  </p>
            </div>
		  </Link>

		<Link className={`${styles.link} ${styles.blog_item}`} to="/what-is-nicotine">
            <div className={styles.blog_info}>
              <span><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>What is nicotine?</h3>
			  <p className={styles.blogDescription}>
			  	Is nicotine itself harmful? Is nicotine a stimulant? And why do adult users use it? Find answers to these questions and more on what nicotine is here.
			  </p>
            </div>
		  </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
