import styles from './Title.module.css';

function Title() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Blog</h1>
        </div>
    );
}

export default Title;