import React from "react";
import styles from "./HeroSection.module.css";
import desktopBanner from '../../images/banners/desktop/Discover.png';
import mobileBanner from '../../images/banners/mobile/Discover.png';
import global from '../../components/Global.module.css';

function HeroSection() {
    return (
        <section className={`${styles.banner}`}>
            <picture>
                <source media="(max-width: 767px)" srcSet={mobileBanner} />
                <source media="(min-width: 768px)" srcSet={desktopBanner} />
                <img className={styles.image} src={desktopBanner} alt="banner" />
            </picture>
        </section>
    );
}

export default HeroSection;
