import styles from './Title.module.css';

function Title() {
    return (
        <div className={styles.wrapper}>
			<br />
            <h2 className={styles.h2}>ZYN is...<br/><i>Simple to use.</i></h2>
        </div>
    );
}

export default Title;