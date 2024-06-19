import global from "../../components/Global.module.css";
import styles from "./TextLeft.module.css";
import placeholder from "../../images/discover/zyn_dj.jpg";

function TextLeft() {
  return (
	  <div className={`${global.wrapper}`}>
		<br />
		<br />
	<h3>ZYN enhances every moment</h3>
	<div className={styles.wrapper}>

      <div className={styles.left}>
        <p className={styles.colorWhite}>
          Because we understand that your nicotine needs might change throughout
          the day, we’ve crafted a range of products with varying nicotine
          levels to satisfy your different nicotine moments and preferences
        </p>
      </div>
      <div className={styles.right}>
        <img src={placeholder} className={styles.image} alt="" />
      </div>
	</div>
    </div>
  );
}

export default TextLeft;
