import { Link } from "react-router-dom";
import global from "../../components/Global.module.css"
import styles from "./Flavour.module.css"

function Flavour() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.colorWhite}>ZYN flavours...<br/><i>Which one is right for me?</i></h2>
			<p className={styles.colorWhite}>ZYN nicotine pouches come in various flavours. Flavour experience is personal and might require you to consider trying different flavours to find your preferred variant of ZYN nicotine pouch. 
			</p>
			<Link to="where-to-buy"><button className={styles.buyBtn}>Where to Buy ZYN</button></Link>
		</div>
	)
}

export default Flavour;