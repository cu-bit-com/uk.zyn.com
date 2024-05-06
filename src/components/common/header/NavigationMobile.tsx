import { Link } from 'react-router-dom';
import styles from './NavigationMobile.module.css';
import { useEffect, useRef } from 'react';

    function NavigationMobile() {
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
        
        const closeMenu = () => {
            if (menuToggleRef.current != null) {
                menuToggleRef.current.checked = false;
            }
        }

        return(
            <div className={styles.hamburgerMenu}>
            <input id={styles.menuToggle} type="checkbox" ref={menuToggleRef}/>
            <label className={styles.menuBtn} htmlFor={styles.menuToggle} ref={menuBtnRef}>
                <span></span>
            </label>

            <ul className={styles.menuBox} ref={menuBoxRef}>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/'>Home</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/discover-zyn'>Discover ZYN</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/where-to-buy'>Where to Buy</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/how-to-zyn'>How to ZYN</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/blog'>Blog</Link></li>
                <li><Link className={`${styles.menuItem} ${styles.link}`} onClick={closeMenu} to='/faq'>FAQ</Link></li>
            </ul>
        </div>
        );
}

export default NavigationMobile;