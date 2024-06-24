import React from "react";
import office from "../../images/discover/Office.png";
import bag_zyn from "../../images/discover/bag_zyn.png";
import commute from "../../images/discover/Commute.png";
import zyn_cleaner from "../../images/discover/zyn_cleaner.png";
import global from "../../components/Global.module.css";
import styles from "./Carousel.module.css";

function Carousel() {

	return (
		<>
		<h3 className={styles.sectionTitle}>ZYN is...</h3>
		<div className={`${global.wrapper} ${styles.wrapper}`}>
        <div className={styles.cardWrapper}>
          <div className={styles.inside}>
            <div className={styles.card}>
              <img className={styles.image} width="100%" src={office} alt="" />
            </div>
            <br />
            <h3 className={styles.cardTitle}>Discreet & Considerate</h3>
            <p className={styles.cardParagraph}>
              With no ash, no smoke & no smoke smell, nicotine pouches are a
              cleaner way to experience nicotine. They also don’t require any device
              & are simple to use – you just place the small, white pouches
              between your upper lip and gum & experience the flavour & nicotine as
              they are released.
            </p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.inside}>
            <div className={styles.card}>
              <img className={styles.image} width="100%" src={commute} alt="" />
            </div>
            <br />
            <h3 className={styles.cardTitle}>Clean & Convenient</h3>
            <p className={styles.cardParagraph}>
              Nicotine pouches are small, convenient and simple to use.
            </p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.inside}>
            <div className={styles.card}>
              <img className={styles.image} width="100%" src={bag_zyn} alt="" />
            </div>
            <br />
            <h3 className={styles.cardTitle}>High Quality</h3>
            <p className={styles.cardParagraph}>
              ZYN is made up of high quality nicotine and food-grade
              ingredients. The pouch itself is made from plant fibers, specially
              designed to release nicotine while feeling comfortable under your
              lip.
            </p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.inside}>
            <div className={styles.card}>
              <img className={styles.image} width="100%" src={zyn_cleaner} alt="" />
            </div>
            <br />
            <h3 className={styles.cardTitle}>Trustworthy</h3>
            <p className={styles.cardParagraph}>
              ZYN is world’s No.1 nicotine pouch brand. *
            </p>
          </div>
        </div>
    </div>
		</>
  );
};

export default Carousel;
