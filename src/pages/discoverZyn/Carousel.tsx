import global from "../../components/Global.module.css"
import styles from "./Carousel.module.css"
import office from "../../images/discover/Office.jpg";
import commute from "../../images/discover/Commute.jpg";
import game from "../../images/discover/Game.jpg";

function Carousel() {
	return (
		<div className={`${global.wrapper}`}>
			<h3>ZYN is...</h3>
			<div className={styles.cardWrapper}>
				<div className={styles.inside}>
					<div className={styles.card}>
						<img className={styles.image} src={office} alt="" />
						<h3 className={styles.cardTitle}>Discreet & Considerate</h3>
					</div>
					<p className={styles.cardParagraph}>With no ash, no smoke & no smoke smell, nicotine pouches are a cleaner way to enjoy nicotine. They also don’t require any device & are simple to use – you just place the small, white pouches between your upper lip and gum & enjoy the flavor & nicotine as they are released.</p>
				</div>
				<div className={styles.inside}>
					<div className={styles.card}>
						<img className={styles.image} src={commute} alt="" />
						<h3 className={styles.cardTitle}>Clean & Convenient</h3>
					</div>
					<p className={styles.cardParagraph}>Nicotine pouches are small, convenient and simple to use.</p>
				</div>
				<div className={styles.inside}>
					<div className={styles.card}>
						<img className={styles.image} src={game} alt="" />
						<h3 className={styles.cardTitle}>High Quality</h3>
					</div>
					<p className={styles.cardParagraph}>ZYN® is made up of high quality nicotine and food-grade ingredients. The  pouch itself is made from plant fibers, specially designed to release nicotine while feeling comfortable under your lip.</p>
				</div>
				<div className={styles.inside}>
					<div className={styles.card}>
						<img className={styles.image} src={commute} alt="" />
						<h3 className={styles.cardTitle}>Thrustworthy</h3>
					</div>
					<p className={styles.cardParagraph}>ZYN is world’s No.1 nicotine pouch brand.*“ “* PMI reported global shipment volumes and in market sales estimates of nicotine pouch units, from January to June 2023.</p>
				</div>
			</div>
		</div>
	)
}

export default Carousel;