import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.headerWrapper}>
            <Navigation/>
            <NavigationMobile/>
        </div>
    );
}

export default Header;