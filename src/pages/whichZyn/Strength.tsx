import React, { useState, useEffect } from 'react';
import global from "../../components/Global.module.css";
import styles from "./Strength.module.css";
import desktop_mini from "../../images/whichZyn/minicropped_desktop.png";
import desktop_slim from "../../images/whichZyn/slimcropped_desktop.png";
import mobile_mini from "../../images/whichZyn/minicropped_mobile.png";
import mobile_slim from "../../images/whichZyn/slimcropped_mini.png";
import { Link } from 'react-router-dom';

function Strength() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={global.wrapper}>
            <br />
            <br />
            <h2>Which nicotine strength is right for me?</h2>
            <br />
            <br />
            
            <div className={styles.imageSection}>
				<div className={`${styles.left} ${styles.imageWrapper}`}>
                	<img src={windowWidth < 960 ? desktop_mini : desktop_mini} className={styles.img} alt="" />
					<Link to="../where-to-buy"><button className={`${styles.imageBtn} ${global.ctaSecondary}`}>Buy ZYN</button></Link>
				</div>
				<div className={`${styles.right} ${styles.imageWrapper}`}>
	                <img src={windowWidth < 960 ? desktop_slim : desktop_slim} className={styles.img} alt="" />
					<Link to="../where-to-buy"><button className={`${styles.imageBtn} ${global.ctaPrimary}`}>Buy ZYN</button></Link>
				</div>
            </div>
        </div>
    );
}

export default Strength;
