import React from "react";
import styles from "./HeroSection.module.css";
import heroBanner from "../../images/banners/desktop/Discover.png";
import global from '../../components/Global.module.css';

function HeroSection() {
    return (
        <section className={`${styles.banner}`}>
            <img className={styles.image} src={heroBanner} alt="banner"/>
        </section>
    );
}

export default HeroSection;