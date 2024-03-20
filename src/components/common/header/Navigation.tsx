import styles from "./Navigation.module.css";
import global from '../../Global.module.css';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <nav className={`${styles.nav} ${global.wrapper}`}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to='/shop'>Shop ZYN</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to='/where-to-buy'>Where to Buy</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to='/how-to-zyn'>How to ZYN</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to='/blog'>Blog</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <hr className={styles.hr}/>
        </div>
    );
}

export default Navigation;