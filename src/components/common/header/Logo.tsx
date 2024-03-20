import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
    return (
        <Link to='/' className={styles.logo}>
            <h1 className={styles.logo}>ZYN</h1>
        </Link>
    );
}

export default Logo;