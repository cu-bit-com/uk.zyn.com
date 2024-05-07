import global from "../../components/Global.module.css"
import styles from "./HowToUse.module.css"

function HowToUse() {
	return (
		<div className={global.wrapper}>
			<h3>How to use nicotine pouches?</h3>
			<br/><br/>
			<p className={styles.p}>Using ZYN nicotine pouches is really straightforward - here's how to use them in 4 simple steps:</p>
			<br/><br/>
			<ul className={styles.list}>
				<li>Break the perforated label on the can.</li>
				<li>Open it up and take out a nicotine pouch - popping it under your lip.</li>
				<li>Leave the pouch in your mouth for between 5 and 10 minutes, or up to 30 minutes.</li>
				<li>Discard the pouch in the waste compartment of the can once you’ve used it.</li>
			</ul>
			<br/><br/>
			<p className={styles.p}>If you can feel a tingling sensation when using ZYN, don’t worry! To work effectively, ZYN also has an elevated pH level that may cause a tingle - we call it the ZYNGLE. ZYN also contains nicotine, which is a stimulant, and this may cause a similar sensation.</p>
			<br/><br/>
			<p className={styles.p}>How long the tingling sensation lasts changes from person to person. Some people may feel a slight tingling throughout the use of the pouch whereas others may only feel it for a few minutes.</p>
			<br/><br/>
		</div>
	)
}

export default HowToUse;