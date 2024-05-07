import styles from './Image.module.css';
import global from '../../components/Global.module.css';
import one from "../../images/howToZyn/1.png"
import two from "../../images/howToZyn/2.png"
import three from "../../images/howToZyn/3.png"
import four from "../../images/howToZyn/4.png"

function Image() {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
            <div className={styles.card}>
				<img src={one} className={styles.img} alt="" />
				<h3>STEP 1</h3>
				<br />
				<p>Break the seal to open the can.</p>
			</div>
            <div className={styles.card}>
				<img src={two} className={styles.img} alt="" />
				<h3>STEP 2</h3>
				<br />
				<p>Place a ZYN pouch under your lip. You may feel a tingling sensation. That's an expected part of the experience.</p>
			</div>
            <div className={styles.card}>
				<img src={three} className={styles.img} alt="" />
				<h3>STEP 3</h3>
				<br />
				<p>Use for around 30 mins.</p>
			</div>
            <div className={styles.card}>
				<img src={four} className={styles.img} alt="" />
				<h3>STEP 4</h3>
				<br />
				<p>You can keep the used pouches in the compartment on the lid.</p>
			</div>
        </div>
    );
}

export default Image;