import { Link } from 'react-router-dom';
import styles from './NavigationMobile.module.css';
import { useEffect, useRef } from 'react';

    const NavigationMobile: React.FC = () => {
        const menuToggleRef = useRef<HTMLInputElement>(null);
        const menuBoxRef = useRef<HTMLUListElement>(null);
        const menuBtnRef = useRef<HTMLLabelElement>(null);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
            if (
                menuToggleRef.current &&
                menuBoxRef.current &&
                menuBtnRef.current &&
                !menuToggleRef.current.contains(event.target as Node) &&
                !menuBoxRef.current.contains(event.target as Node) &&
                !menuBtnRef.current.contains(event.target as Node)
            ) {
                menuToggleRef.current.checked = false;
            }
            };

            document.addEventListener('click', handleClickOutside);

            return () => {
            document.removeEventListener('click', handleClickOutside);
            };
        }, []);
        
        return(
            <div className={styles.hamburgerMenu}>
            <input id={styles.menuToggle} type="checkbox" ref={menuToggleRef}/>
            <label className={styles.menuBtn} htmlFor={styles.menuToggle} ref={menuBtnRef}>
                <span></span>
            </label>

            <ul className={styles.menuBox} ref={menuBoxRef}>
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