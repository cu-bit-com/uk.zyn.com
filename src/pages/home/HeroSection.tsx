import React from "react";
import styles from "./HeroSection.module.css";
import heroBanner from "../../images/Temp_banner.jpg";
import global from "../../components/Global.module.css";

function HeroSection() {
  return (
    <section className={`${styles.banner} ${global.wrapper}`}>
      <img className={styles.image} src={heroBanner} alt="banner" />
    </section>
  );
}

export default HeroSection;
