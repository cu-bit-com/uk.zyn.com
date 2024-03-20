import { Link } from 'react-router-dom';
import styles from './NavigationMobile.module.css';

function NavigationMobile() {
    return(
        <div className={styles.hamburgerMenu}>
            <input id={styles.menuToggle} type="checkbox" />
            <label className={styles.menuBtn} htmlFor={styles.menuToggle}>
            <span></span>
            </label>

            <ul className={styles.menuBox}>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/'>Home</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/shop'>Shop</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/where-to-buy'>Where to Buy</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/how-to-zyn'>How to ZYN</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/blog'>Blog</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavigationMobile;