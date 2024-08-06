import { Link } from "react-router-dom";
import global from "../../components/Global.module.css";
import styles from "./Where.module.css";

function Where() {
	return (
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Where to buy ZYN?</h1>
				<p>You can purchase ZYN nicotine pouches online on <Link to="https://www.iqos.com/gb/en/discover-zyn/buy-zyn.html">IQOS.com</Link>, but they are also widely available in several stores and online retailers.</p>
			</div>
	)
}

export default Where;