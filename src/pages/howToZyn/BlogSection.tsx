import global from "../../components/Global.module.css"
import styles from "./BlogSection.module.css"
import placeholder from "../../images/zyn-item.jpeg"

function BlogSection() {
	return (
		<div className={global.wrapper}>
			<br />
			<br />
			<h3>Find out more on our Blog Articles</h3>
			<br />
			<br />
			<div className={styles.sectionWrapper}>
				<div className={styles.card}>
					<img className={styles.articleImg} src={placeholder} alt="" />
					<h4>Article Title</h4>
				</div>
				<div className={styles.card}>
					<img className={styles.articleImg} src={placeholder} alt="" />
					<h4>Article Title</h4>
				</div>
				<div className={styles.card}>
					<img className={styles.articleImg} src={placeholder} alt="" />
					<h4>Article Title</h4>
				</div>
			</div>
		</div>
	)
}

export default BlogSection;