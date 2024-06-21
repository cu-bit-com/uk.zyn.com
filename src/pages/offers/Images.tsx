import styles from './Images.module.css';
import global from '../../components/Global.module.css';
import image from '../../images/products/4294.png';

function Images() {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
                <img src={image} className={styles.item}></img>
        </div>
    );
}

export default Images;