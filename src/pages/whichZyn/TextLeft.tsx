import global from "../../components/Global.module.css"
import styles from "./TextLeft.module.css"
import game from "../../images/discover/Game.png"

function TextLeft() {
	return (
		<div className={`${global.wrapper}`}>
			<br />
			<br />
			<h3>What is the difference between Mini and Slim?</h3>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<p>ZYN Mini features dry nicotine pouches that offer a smooth nicotine experience with mellow flavors.</p>
					<p>ZYN Slim features moist nicotine pouches that are slightly larger and full-bodied than ZYN Mini. The Slim pouch provides a rich and intense nicotine and flavor experience.</p>
				</div>
				<div className={styles.right}>
					<img src={game} className={styles.image} alt="" />
				</div>
			</div>
		</div>
	)
}

export default TextLeft;