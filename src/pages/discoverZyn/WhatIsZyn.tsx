import global from "../../components/Global.module.css";
import styles from "./WhatIsZyn.module.css";
import one from "../../images/discover/1.png";
import two from "../../images/discover/2.png";
import three from "../../images/discover/3.png";
import four from "../../images/discover/4.png";
import five from "../../images/discover/5.png";
import { Link } from "react-router-dom";

function scrollToTop() {
	window.scrollTo({
	  top: 0,
	});
  }

function WhatIsZyn() {
	return (
		<div className={`${global.wrapper} ${styles.wrapper}`}>
			<h3 className={styles.colorWhite}>Why choose ZYN?</h3>
			<div className={styles.infoWrapper}>
				<div className={styles.card}>
					<img className={styles.img} src={one} alt="" />
					<p className={styles.cardParagraph}>
						No smoke, no ash
					</p>
				</div>
				<div className={styles.card}>
					<img className={styles.img} src={two} alt="" />
					<p className={styles.cardParagraph}>
						No tobacco
					</p>
				</div>
				<div className={styles.card}>
					<img className={styles.img} src={three} alt="" />
					<p className={styles.cardParagraph}>
						Unique flavours
					</p>
				</div>
				<div className={styles.card}>
					<img className={`${styles.img} ${styles.snowflake}`} src={four} alt="" />
					<p className={styles.cardParagraph}>
						Lasts around 30 mins
					</p>
				</div>
				<div className={styles.card}>
					<img className={styles.img} src={five} alt="" />
					<p className={styles.cardParagraph}>
						Trusted & quality brand
					</p>
				</div>
			</div>
			<div className={styles.btnContainer}>
				<Link to="where-to-buy"><button onClick={scrollToTop} className={global.ctaPrimary}>Buy ZYN</button></Link>
			</div>
		</div>
	)
}

export default WhatIsZyn;