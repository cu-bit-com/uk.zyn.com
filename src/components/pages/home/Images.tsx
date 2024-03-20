import styles from './Images.module.css';
import global from '../../Global.module.css';

function Images() {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    );
}

export default Images;