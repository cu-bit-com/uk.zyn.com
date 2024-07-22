import global from "../../components/Global.module.css"
import styles from "./Intro.module.css"

function Intro() {
	return (
		<div className={global.wrapper}>
			<br />
			<br />
			<h1>Which ZYN is right for me?</h1>
			<br />
			<br />
			<p className={styles.p}>ZYN has designed a portfolio of products with different flavours and nicotine levels to offer you choices that satisfy your preferences and moments. Our variety of flavours have been developed to deliver an excellent taste experience whatever flavour you choose.</p>
		</div>
	)
}

export default Intro;