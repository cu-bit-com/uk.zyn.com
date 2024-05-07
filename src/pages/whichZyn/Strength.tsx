import global from "../../components/Global.module.css"
import styles from "./Strength.module.css"

function Strength() {
	return (
		<div className={global.wrapper}>
			<br />
			<br />
			<h2>Which Nicotine strength is right for me?</h2>
			<br />
			<br />
			
			<div className={styles.imageSection}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</div>
		</div>
	)
}

export default Strength;