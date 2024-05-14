import global from "../../components/Global.module.css"
import styles from "./Flavour.module.css"

function Flavour() {
	return (
		<div className={`${global.wrapper} ${styles.margin}`}>
			<br />
			<br />
			<h3>Which nicotine pouch flavour is right for me?</h3>
			<br />
			<br />
			<p>ZYN nicotine pouches come in various flavours. Flavour experience is personal and might require you to consider trying different flavours to find your preferred variant of ZYN nicotine pouch.</p>
		</div>
	)
}

export default Flavour;