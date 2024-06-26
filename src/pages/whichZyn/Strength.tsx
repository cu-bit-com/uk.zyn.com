import React, { useState, useEffect } from 'react';
import global from "../../components/Global.module.css";
import styles from "./Strength.module.css";
import desktop_img from "../../images/whichZyn/infogr_desktop.png";
import mobile_img from "../../images/whichZyn/infogr_mobile.png";
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
                <img src={windowWidth < 960 ? mobile_img : desktop_img} className={styles.img} alt="" />
            </div>
        </div>
    );
}

export default Strength;
