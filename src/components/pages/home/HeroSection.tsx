import React from "react";
import styles from "./HeroSection.module.css";
import heroBanner from "../../../images/hero-banner.jpeg";
import global from '../../Global.module.css';

function HeroSection() {
    return (
        <section className={`${styles.banner} ${global.wrapper}`}>
            <img className={styles.image} src={heroBanner} alt="banner"/>
        </section>
    );
}

export default HeroSection;