import { Link } from "react-router-dom";
import global from "../../components/Global.module.css"
import styles from "./Index.module.css"

function ImportantInformation() {
	return (
		<>
		<h2 className={styles.title}>Important information</h2>
		<div className={`${styles.wrapper} ${global.wrapper}`}>
			<h4 className={styles.listTitle}>Intended Users</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Nicotine pouches are for adult use only.</li>
				<li className={styles.listItem}>Nicotine pouches are for adults who would otherwise continue to use tobacco or nicotine-containing products.</li>
				<li className={styles.listItem}>Children and adolescents should never use nicotine pouches under any circumstances.</li>
			</ul>
			<h4 className={styles.listTitle}>ZYN contains nicotine</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Nicotine pouches contain nicotine, which is addictive.</li>
				<li className={styles.listItem}>Nicotine pouches are not risk-free. The best way to reduce nicotine-related health risks is to quit nicotine use altogether.</li>
				<li className={styles.listItem}>Some users of nicotine-containing products may experience abdominal pain, chest pain, choking sensation, cough, difficulty breathing, dizziness, dry mouth, dry throat, gingivitis, headache, malaise, nasal stuffiness, nausea, mouth irritation, palpitations, throat irritation, and vomitin.</li>
				<li className={styles.listItem}>Nicotine-containing products should not be used by people who have or are at risk of heart disease, are diabetic, are epileptic, or are experiencing seizure.</li>
				<li className={styles.listItem}>Nicotine-containing products should not be used during pregnancy or while breast-feeding.  If you are pregnant, breast-feeding, or think you may be pregnant, you should quit tobacco and nicotine use altogethe.</li>
				<li className={styles.listItem}>Using nicotine pouches or, in some cases, stopping use of nicotine pouches  (or other nicotine-containing products) may require the adjustment of the dosing of certain medicines (e.g. theophylline, clozapine, ropinirole).  If you have questions about whether you should use nicotine pouches given an existing health condition, consult a health care professional.</li>

			</ul>

			<h3>Please read more on important information in FAQ <Link className={styles.faqLink} to="/faq">here</Link></h3>
		</div>
		</>
	)
}

export default ImportantInformation;