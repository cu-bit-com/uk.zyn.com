import React from "react";
import styles from "./Blog.module.css";
import global from "../../components/Global.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";




function BlogSection() {
	const location = useLocation();
	const navigate = useNavigate();

	const handleBlogClick = (path: string) => {
		if(location.pathname ==="/gb"){
			navigate(`../gb/blog/${path}`);
		}
		else
		navigate(`../blog/${path}`);
	};
	return (
	<>
	<link rel="canonical" href="https://www.zyn.com/gb/blog" />
	<meta title="ZYN Blog – News and Updates on Nicotine Pouches | ZYN UK"/>
	<meta name="description" content="Stay informed with the latest news, tips, and updates about ZYN nicotine pouches from our blog."/>
    <div className={global.wrapper}>
      <div className={styles.blog_wrapper}>
		<div className={styles.titleContainer}>
        	<h1 className={styles.largerFont}>News and blog.</h1>
		</div>


		<div className={styles.blog_container}>
        <div onClick={() => handleBlogClick("how-do-nicotine-pouches-work")} className={`${styles.link} ${styles.blog_item}`}>
            <div className={styles.blog_info}>
              <span><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>How do nicotine pouches work?</h3>
			  <p className={styles.blogDescription}>
			  	How do nicotine pouches work? And are they better than other smoke-free nicotine products? Learn how to use nicotine pouches properly here.
			  </p>
            </div>
		  </div>

		  <div onClick={() => handleBlogClick("what-is-nicotine")} className={`${styles.link} ${styles.blog_item}`}>
            <div className={styles.blog_info}>
              <span><strong>Blog</strong></span>
			  <h3 className={styles.blogTitle}>What is nicotine?</h3>
			  <p className={styles.blogDescription}>
			  	Is nicotine itself harmful? Is nicotine a stimulant? And why do adult users use it? Find answers to these questions and more on what nicotine is here.
			  </p>
            </div>
		  </div>
        </div>
      </div>
    </div>
	</>
  );
}

export default BlogSection;
