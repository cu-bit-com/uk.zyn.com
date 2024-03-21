import { Link } from 'react-router-dom';
import global from '../../Global.module.css';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <hr className={styles.hr} />
            <div className={global.wrapper}>
                <footer id={styles.footer}>
                    <div className={`${styles.links} ${styles.item}`}>
                        <ul className={styles.list}>
                            <Link to='/contact' onClick={() => window.scrollTo({top: 0})}><li className={styles.listItem}><button className={styles.link}>FAQs</button></li></Link>
                            <Link to='' onClick={() => window.scrollTo({top: 0})}><li className={styles.listItem}><button className={styles.link}>What is ZYN</button></li></Link>
                            <Link to='/where-to-buy' onClick={() => window.scrollTo({top: 0})}><li className={styles.listItem}><button className={styles.link}>Find ZYN</button></li></Link>
                        </ul>
                    </div>
                    <div className={`${styles.social} ${styles.item}`}>
                        <ul className={styles.list}>
                            <Link to='https://www.facebook.com/zyneurope' target='_blank'><li className={styles.listItem}><button className={styles.link}>Facebook</button></li></Link>
                            <Link to='https://www.instagram.com/zyn_europe/' target='_blank'><li className={styles.listItem}><button className={styles.link}>Instagram</button></li></Link>
                            <Link to='https://www.youtube.com/channel/UCPV4gOJ1LtZbV5QBgzqG1ZQ' target='_blank'><li className={styles.listItem}><button className={styles.link}>YouTube</button></li></Link>
                        </ul>
                    </div>
                    <div className={`${styles.contact} ${styles.item}`}>
                        <Link to='/contact' onClick={() => window.scrollTo({top: 0})}><button className={styles.link}>Contact Us</button></Link>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;