import styles from './Content.module.css';
import global from '../../components/Global.module.css';

function Content() {
    return (
        <div className={global.wrapper}>
			<h3>Find ZYN Nicotine Pouches in Store</h3>
            <p className={styles.p}>Find ZYN at Saintsbury’s, Morrisons BP, Waitrose & WHSmith’s Travel</p>
        </div>
    );
}

export default Content;