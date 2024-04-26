import { Link } from 'react-router-dom';
import global from '../../Global.module.css';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
		<div className={`${styles.text} ${global.wrapper}` }>
			<h4>This product is not risk-free and contains nicotine, which is addictive. Only for use by adults.</h4>
			<p>* PMI reported global shipment volumes and in-market sales estimates of nicotine pouch units, from January to June 2023.</p>
		</div>
		<div className={styles.background}>
            <div className={global.wrapper}>
                <footer id={styles.footer}>
                    <div className={`${styles.links} ${styles.item}`}>
						<h4>Useful links</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link className={styles.link} to='/contact' onClick={() => window.scrollTo({top: 0})}>FAQs</Link></li>
                            <li className={styles.listItem}><Link className={styles.link} to='/what-is-zyn' onClick={() => window.scrollTo({top: 0})}>What is ZYN?</Link></li>
                            <li className={styles.listItem}><Link className={styles.link} to='/where-to-buy' onClick={() => window.scrollTo({top: 0})}>Find ZYN</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
		</div>
		<div className={styles.legal}>
			<span>© 2023 Philip Morris Products SA</span>
			<ul className={styles.legalList}>
				<li><Link className={styles.legalLink} to="#">Privacy Notice</Link></li>
				<li><Link className={styles.legalLink} to="#">Terms & Conditions</Link></li>
				<li><Link className={styles.legalLink} to="#">Terms of Use</Link></li>
				<li><Link className={styles.legalLink} to="#">Cookie Preferences</Link></li>
				<li><Link className={styles.legalLink} to="#">Gender Pay Gap Report</Link></li>
				<li><Link className={styles.legalLink} to="#">Important Information</Link></li>
			</ul>
		</div>
        </>
    );
}

export default Footer;