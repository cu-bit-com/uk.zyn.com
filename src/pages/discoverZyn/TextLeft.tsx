import global from "../../components/Global.module.css"
import styles from "./TextLeft.module.css"
import placeholder from "../../images/zyn-item.jpeg"

function TextLeft() {
	return (
		<div className={`${global.wrapper} ${styles.wrapper}`}>
			<div className={styles.left}>
				<h3>ZYN enhances every moment</h3>
				<p>Because we understand that your nicotine needs might change throughout the day, we’ve crafted a range of products with varying nicotine levels to satisfy your different nicotine moments and preferences</p>
			</div>
			<div className={styles.right}>
				<img src={placeholder} width="300px" alt="" />
			</div>
		</div>
	)
}

export default TextLeft;