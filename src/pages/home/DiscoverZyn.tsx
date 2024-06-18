import global from "../../components/Global.module.css"
import styles from "./DiscoverZyn.module.css";
import image_two from "../../images/home/2.png"
import image_three from "../../images/home/3.png"
import { Link } from "react-router-dom";

function DiscoverZyn() {
	return (
	  <div className={global.wrapper}>
		<h2 className={styles.title}>Discover ZYN</h2>
		<p>A tobacco-free alternative to smoking filled with flavours and nicotine strengths designed to satisfy your taste.</p>

		<div>
			<div className={styles.discoverWrapper}>
				<div className={styles.left}>
					<img className={styles.discoverImg} src={image_three} alt="" />
					<Link to="/discover-zyn"><button className={styles.discoverBtn}>Discover ZYN</button></Link>
				</div>
				<div className={styles.right}>
					<img className={styles.discoverImg} src={image_two} alt="" />
					<Link to="where-to-buy"><button className={styles.discoverBtn}>Where to Buy</button></Link>
				</div>
			</div>
		</div>
	  </div>
	);
  }
  
  export default DiscoverZyn;
  