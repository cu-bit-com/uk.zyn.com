import global from "../../components/Global.module.css"
import styles from "./Flavour.module.css"

function Flavour() {
	return (
		<div className={`${global.wrapper} ${styles.margin}`}>
			<br />
			<br />
			<h3>Which nicotine pouch flavor is right for me?</h3>
			<br />
			<br />
			<p>ZYN nicotine pouches come in various flavors. Flavor experience is personal and might require you to consider trying different flavors to find your preferred variant of ZYN nicotine pouch.</p>
		</div>
	)
}

export default Flavour;