import styles from './Content.module.css';
import global from '../../components/Global.module.css';

function Content() {
    return (
        <div className={`${global.wrapper}`}>
			<h2 className={styles.title}>Discover ZYN</h2>
            <p className={styles.p}>ZYN is inovative, high-quality alternative to smoking that delivers unique plavours & a smoke-free nicotine experience wherever, whenever.</p>
        </div>
    );
}

export default Content;