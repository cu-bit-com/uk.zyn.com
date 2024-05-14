import global from "../../components/Global.module.css"
import styles from "./Index.module.css"

function ImportantInformation() {
	return (
		<div className={`${styles.wrapper} ${global.wrapper}`}>
			<h2 className={styles.title}>Important information</h2>
			<ul className={styles.list}>
				<li className={styles.listItem}>For recreational use</li>
				<li className={styles.listItem}>Not for persons under 18 years</li>
				<li className={styles.listItem}>Not recommended during pregnancy or nursing or for people with a history of cardiovascular disease</li>
				<li className={styles.listItem}>Contains nicotine which is highly addictive substance</li>
				<li className={styles.listItem}>For Existing nicotine users</li>
			</ul>
		</div>
	)
}

export default ImportantInformation;