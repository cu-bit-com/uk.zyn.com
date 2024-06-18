import { Link } from 'react-router-dom';
import global from '../../Global.module.css';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
		<hr className={styles.hr}/>
		<div className={`${styles.text} ${global.wrapper}`}>
			<p className={styles.warningText}>This product is not risk-free and contains nicotine, which is addictive.<br/> Only for use by adults.</p>
			<p>* PMI reported global shipment volumes and in-market sales estimates of nicotine pouch units, from January to June 2023.</p>
		</div>
		<div className={styles.background}>
                <footer id={styles.footer}>
                    <div className={`${styles.links} ${styles.item}`}>
						<h2 className={styles.footerTitle}>Helpful Links</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link className={styles.link} to='/what-is-zyn' onClick={() => window.scrollTo({top: 0})}>What is ZYN?</Link></li>
                            <li className={styles.listItem}><Link className={styles.link} to='/where-to-buy' onClick={() => window.scrollTo({top: 0})}>Find ZYN</Link></li>
                        </ul>
                    </div>
					<div className={`${styles.links} ${styles.item}`}>
						<h2 className={styles.footerTitle}>Customer Care</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link className={styles.link} to='/faq' onClick={() => window.scrollTo({top: 0})}>FAQs</Link></li>
                        </ul>
					</div>
                </footer>
		</div>
		<div className={styles.legal}>
			<span>© 2023 Philip Morris Products SA</span>
			<ul className={styles.legalList}>
				<li><Link className={styles.legalLink} to="https://www.pmiprivacy.com/global/en/consumer/">Privacy Notice</Link></li>
				<li><Link className={styles.legalLink} onClick={() => window.scrollTo({top: 0})} to="/terms-of-use">Terms of Use</Link></li>
				<li><button id="ot-sdk-btn" className={`ot-sdk-show-settings ${styles.cookieBtn}`}>Cookie Settings</button></li>
				<li><Link className={styles.legalLink} onClick={() => window.scrollTo({top: 0})} to="/important-information">Important Information</Link></li>
			</ul>
		</div>
        </>
    );
}

export default Footer;