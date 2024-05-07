import global from "../../components/Global.module.css"
import styles from "./WhatIsZyn.module.css"
import whyZyn from "../../images/discover/why zyn.png"

function WhatIsZyn() {
	return (
		<div className={`${global.wrapper} ${styles.wrapper}`}>
			<h3>Why ZYN?</h3>
			<div className={styles.whyZyn}>
				<img className={styles.image} src={whyZyn} alt="" />
			</div>
		</div>
	)
}

export default WhatIsZyn;