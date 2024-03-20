import global from '../../Global.module.css';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={global.wrapper}>
            <footer id={styles.footer}>
                <div className={`${styles.links} ${styles.item}`}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><button className={styles.link}>FAQs</button></li>
                        <li className={styles.listItem}><button className={styles.link}>What is ZYN</button></li>
                        <li className={styles.listItem}><button className={styles.link}>Find ZYN</button></li>
                    </ul>
                </div>
                <div className={`${styles.social} ${styles.item}`}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><button className={styles.link}>Facebook</button></li>
                        <li className={styles.listItem}><button className={styles.link}>Instagram</button></li>
                        <li className={styles.listItem}><button className={styles.link}>YouTube</button></li>
                    </ul>
                </div>
                <div className={`${styles.contact} ${styles.item}`}>
                    <button className={styles.link}>Contact Us</button>
                </div>
            </footer>
        </div>
    );
}

export default Footer;