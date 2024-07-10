import styles from './Image.module.css';
import global from '../../components/Global.module.css';
import one from "../../images/howToZyn/1.png";
import two from "../../images/howToZyn/2.png";
import three from "../../images/howToZyn/3.png";
import four from "../../images/howToZyn/4.png";
import item from "../../images/howToZyn/product.png";
import { Link } from 'react-router-dom';

function scrollToTop() {
	window.scrollTo({
	  top: 0,
	});
  }

function Image() {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
            <div className={styles.left}>
				<div className={styles.card}>
					<div className={styles.cardImg}>
						<img src={one} alt="" />
					</div>
					<div className={styles.cardInfo}>
						<p className={styles.biggerP}><strong>Break the seal</strong></p>
						<p className={styles.smallerP}>to open the can.</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardImg}>
						<img src={two} alt="" />
					</div>
					<div className={styles.cardInfo}>
						<p className={styles.biggerP}><strong>Place a ZYN pouch under your lip.</strong></p>
						<p className={styles.smallerP}>You may experience a tingling sensation.</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardImg}>
						<img src={three} alt="" />
					</div>
					<div className={styles.cardInfo}>
						<p className={styles.biggerP}>Use for around <strong>30 minutes.</strong></p>
					</div>
					</div>
				<div className={styles.card}>
					<div className={styles.cardImg}>
						<img src={four} alt="" />
					</div>
					<div className={styles.cardInfo}>
						<p className={styles.biggerP}><strong>You can keep the used pouches</strong></p>
						<p className={styles.smallerP}>in the compartment on the lid.</p>
					</div>
				</div>
				<Link to="../where-to-buy"><button onClick={scrollToTop} className={global.ctaSecondary}>Buy ZYN</button></Link>
			</div>
			<div className={styles.right}>
				<img className={styles.imageRight} src={item} alt="" />
			</div>
        </div>
    );
}

export default Image;