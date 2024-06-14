import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../../images/ZYN logo_RGB.jpg";

function Logo() {
  return (
    <Link
      to="/"
      className={styles.wrapper}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <h1 className={styles.logo}>
        <img src={logo} alt="zyn logo" width="200px" />
      </h1>
    </Link>
  );
}

export default Logo;
