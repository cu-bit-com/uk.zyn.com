import styles from "./Navigation.module.css";
import global from "../../Global.module.css";
import { Link } from "react-router-dom";
import logo from "../../../images/ZYN logo_RGB.jpg"

function Navigation() {
  return (
    <>
      <div className={styles.desktop}>
        <nav className={`${styles.nav} `}>
          <ul className={styles.list}>
			<div className={`${styles.left} ${styles.navItem}`}>
			<li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/discover-zyn"
              >
                Discover ZYN
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/how-to-zyn"
              >
                How to ZYN
              </Link>
            </li>
			<li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/which-zyn-to-choose"
              >
                Which ZYN to choose
              </Link>
            </li>
			</div>
            
			<div className={`${styles.middle}`}>
			<Link
				to="/"
				onClick={() => window.scrollTo({ top: 0 })}
				>
					<img src={logo} alt="zyn logo" width="200px" />
			</Link>
			</div>

			<div className={`${styles.right} ${styles.navItem}`}>
			<li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/where-to-buy"
              >
                Where to buy
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
			<li className={styles.listItem}>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className={styles.link}
                to="/important-information"
              >
                Important information
              </Link>
            </li>
			</div>
          </ul>
        </nav>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

export default Navigation;
