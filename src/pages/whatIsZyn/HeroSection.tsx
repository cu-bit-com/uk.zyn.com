import styles from "./HeroSection.module.css";
import heroBanner from "../../images/hero-banner.jpeg";
import global from '../../components/Global.module.css';

function HeroSection() {
    return (
        <section className={`${styles.banner}`}>
            <img className={styles.image} src={heroBanner} alt="banner"/>
        </section>
    );
}

export default HeroSection;