import styles from './Content.module.css';
import global from '../../components/Global.module.css';

function Content() {
    return (
        <div className={`${global.wrapper} ${styles.wrapper}`}>
			<h3 className={styles.title}>Partner Stores Selling ZYN</h3>
			<br />
            <p className={styles.p}>You can also purchase ZYN nicotine pouches at Sainsbury’s, Morrisons, BP, Waitrose & WHSmith’s Travel</p>
        </div>
    );
}

export default Content;