import { Link } from "react-router-dom";
import global from "../../components/Global.module.css"
import styles from "./Index.module.css"

function ImportantInformation() {
	return (
		<>
		<h2 className={styles.title}>Important information</h2>
		<div className={`${styles.wrapper} ${global.wrapper}`}>

			<h3>Good Conversion Practices for PMI’s Smoke-free Products</h3>
			<p>PMI offers a variety of quality, scientifically substantiated smoke-free products that are much better choices than continued smoking. Our vision is that our smoke-free products will one day replace cigarettes. </p>

			<ul className={styles.list}>
				<li className={styles.listItem}>Cigarette smoking causes serious diseases and is addictive. Without question, the best decision any smoker can make is to quit tobacco and nicotine use altogether. </li>
				<li className={styles.listItem}>Minors should not use tobacco or nicotine in any form. </li>
				<li className={styles.listItem}>PMI’s smoke-free products are for adults who would otherwise continue to smoke or use other nicotine products. </li>
				<li className={styles.listItem}>We do not offer PMI’s smoke-free products to people who have never used tobacco or nicotine products or who have quit using tobacco and nicotine products. Our smoke-free products are not alternatives to quitting and are not designed as cessation aids. </li>
				<li className={styles.listItem}>PMI’s smoke-free products are not risk free and contain nicotine, which is addictive. Switching to a smoke-free product is, however, a better choice than continuing to smoke. </li>
				<li className={styles.listItem}>We support our adult smoke-free product users in their journey to full conversion through education and guidance. </li>
				<li className={styles.listItem}>For consumers to experience the benefits of smoke-free products, they must switch completely and abandon smoking permanently. </li>
				<li className={styles.listItem}>We inform consumers of all relevant safety information about our smoke-free products.</li>
			</ul>

			<h3>Safety Warnings And Instructions</h3>
			<p className={styles.border}><strong>PLEASE READ ALL SAFETY WARNINGS AND INSTRUCTIONS BEFORE USE TO AVOID INJURY.</strong></p>
			<p><strong>These safety warnings and instructions cannot cover all possible conditions that could occur and users should exercise care and caution.</strong></p>

			<h4 className={styles.smaller_left}>Intended Users</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Nicotine pouches are for adult (18+) use only.</li>
				<li className={styles.listItem}>Nicotine pouches are for adults (18+) who would otherwise continue to use tobacco or nicotine-containing products.</li>
					<li className={styles.listItem}>Children and adolescents should never use nicotine pouches under any circumstances. </li>
					<li className={styles.listItem}>Nicotine pouches should not be used by persons with reduced physical, sensory or mental capabilities or lack of knowledge, unless they have been given supervision or instruction to use the product in a safe way and understand the hazards involved. </li>

			</ul>
			<h4 className={styles.smaller_left}>Nicotine</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Nicotine pouches contain nicotine, which is addictive.</li>
				<li className={styles.listItem}>Nicotine pouches are not risk-free. The best way to reduce nicotine-related health risks is to quit nicotine use altogether.</li>
				<li className={styles.listItem}>Some users of nicotine-containing products may experience abdominal pain, chest pain, choking sensation, cough, difficulty breathing, dizziness, dry mouth, dry throat, gingivitis, headache, malaise, nasal stuffiness, nausea, mouth irritation, palpitations, throat irritation, and vomitin.</li>
				<li className={styles.listItem}>Nicotine-containing products should not be used by people who have or are at risk of heart disease, are diabetic, are epileptic, or are experiencing seizure.</li>
				<li className={styles.listItem}>Nicotine-containing products should not be used during pregnancy or while breast-feeding.  If you are pregnant, breast-feeding, or think you may be pregnant, you should quit tobacco and nicotine use altogethe.</li>
				<li className={styles.listItem}>Using nicotine pouches or, in some cases, stopping use of nicotine pouches  (or other nicotine-containing products) may require the adjustment of the dosing of certain medicines (e.g. theophylline, clozapine, ropinirole).  If you have questions about whether you should use nicotine pouches given an existing health condition, consult a health care professional.</li>
			</ul>

			<h3>Important Safety Information</h3>

			<h4 className={styles.bigger_left}>Choking And Ingestion Hazard</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Keep nicotine pouches out of reach of children at all times. If nicotine pouch is used or swallowed by a child, seek medical attention immediately.</li>
				<li className={styles.listItem}>Nicotine pouches may present a choking hazard if accidentally swallowed.</li>
				<li className={styles.listItem}>If a nicotine pouch is swallowed by an adult, seek medical attention if needed.</li>
			</ul>

			<h4 className={styles.bigger_left}>Irritation Risk</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Do not chew nicotine pouches and exercise caution during use to prevent damage to nicotine pouches. Stop using nicotine pouches and seek medical attention as needed should you experience discomfort or irritation, such as mouth ulcers. </li>
				<li className={styles.listItem}>After handling nicotine pouches, wash hands before touching eyes.  In case of contact with eyes, rinse immediately with water and seek medical attention if needed.</li>
			</ul>

			<h4 className={styles.bigger_left}>Allergic Reaction Risk</h4>
			<ul className={styles.list}>
				<li className={styles.listItem}>Using nicotine pouches could cause an allergic reaction, such as swelling of the face, lips, tongue, gums, throat, or body, difficulty breathing, or wheezing. </li>
				<li className={styles.listItem}>Stop using nicotine pouches and seek medical attention immediately if you experience any of the symptoms above as they may indicate a serious allergic reaction.</li>
			</ul>

			<h3>Use and Storage</h3>
			<ul className={styles.list}>
				<li className={styles.listItem}>Only use one pouch at a time. </li>
				<li className={styles.listItem}>Nicotine pouches are single use only and should never be re-used.</li>
				<li className={styles.listItem}>Nicotine pouches are intended for oral use only. Only use as directed and discard after use.  </li>
				<li className={styles.listItem}>Do not modify nicotine pouches in any way or add any substance to a nicotine pouch.  Doing so may cause injury.</li>
				<li className={styles.listItem}>Do not use nicotine pouches where the use is prohibited.</li>
				<li className={styles.listItem}>Do not store nicotine pouches in excessive temperatures or humidity, or outside of the can.  </li>
				<li className={styles.listItem}>Keep the can closed when not in use.  Use nicotine pouches promptly once removed from the can.</li>
				<li className={styles.listItem}>Do not use nicotine pouches if they appear to be damaged, tampered with, or broken, and stop using if pouch becomes damaged during use. </li>
				<li className={styles.listItem}>Store and dispose of nicotine pouches in a place not accessible to children.</li>
				<li className={styles.listItem}>Dispose of nicotine pouches and can in accordance with local regulations.</li>
			</ul>

			<h3>Reporting of Adverse Events or Incidents</h3>
				<ul>
					<li className={styles.listItem}>If you experience any unwanted health effect when using a nicotine pouch, consult a health care professional. </li>
					<li className={styles.listItem}>You can report any adverse event or incident directly by contacting your local Call Center at 0800 432 0000. By reporting side effects, you can help provide more information on the safety of this product. </li>
					<li className={styles.listItem}>For more information, please go to <Link to="/gb">www.zyn.com/gb</Link></li>
				</ul>

				<p>© 2023 Copyright Philip Morris Products S.A.</p>

			<h3>Please read more on important information in FAQ <Link className={styles.faqLink} to="../faq">here</Link></h3>

			<h4 className={styles.bigger_left}>Is using ZYN safe or risk-free?</h4>
			<p className={styles.smallerP}>No. There is no risk-free product when it comes to smoke-free products. ZYN is not risk-free and contains nicotine, which is addictive. The best option is to quit tobacco and nicotine use altogether. However, switching completely to ZYN is a better choice than continuing to smoke.</p>

			<h4 className={styles.bigger_left}>Is nicotine harmful?</h4>
			<p className={styles.smallerP}>Nicotine is addictive.  However, it is not the main cause of smoking related diseases. ZYN contains nicotine and is for adults who would otherwise continue to smoke.</p>
		</div>
		</>
	)
}

export default ImportantInformation;