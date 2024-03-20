import styles from './Images.module.css';
import global from '../../components/Global.module.css';
import image from '../../images/zyn-item.jpeg';

function Images() {
    return (
        <div className={global.wrapper}>
            <div className={`${styles.container}`}>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
            </div>
        </div>
    );
}

export default Images;