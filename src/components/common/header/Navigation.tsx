import styles from "./Navigation.module.css";
import global from '../../Global.module.css';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className={styles.desktop}>
                <nav className={`${styles.nav} ${global.wrapper}`}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link onClick={() => window.scrollTo({top: 0})} className={styles.link} to='/discover-zyn'>Discover ZYN</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link onClick={() => window.scrollTo({top: 0})} className={styles.link} to='/where-to-buy'>Where to Buy</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link onClick={() => window.scrollTo({top: 0})} className={styles.link} to='/how-to-zyn'>How to ZYN</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link onClick={() => window.scrollTo({top: 0})} className={styles.link} to='/blog'>Blog</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link onClick={() => window.scrollTo({top: 0})} className={styles.link} to='/faq'>FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr className={styles.hr}/>
        </>
    );
}

export default Navigation;