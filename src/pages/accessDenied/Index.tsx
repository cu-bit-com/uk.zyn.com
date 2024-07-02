import styles from "../accessDenied/Index.module.css";
import global from "../../components/Global.module.css";
import logo from "../../images/ZYN logo_RGB.jpg";
import { Link } from "react-router-dom";

function AccessDenied() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<img src={logo} width="100px" alt="" />
				<p className={styles.p}>Please note that this website is intended from the United Kingdom. To ensure compliance with local legal requirements, we need to redirect you to the country you are in.</p>
				<Link to=""><button className={global.ctaSecondary}>CONTINUE</button></Link>
			</div>
		</div>
	);
}

export default AccessDenied;