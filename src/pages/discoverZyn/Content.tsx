import styles from './Content.module.css';
import global from '../../components/Global.module.css';

function Content() {
    return (
        <div className={`${global.wrapper}`}>
			<h2 className={styles.title}>Discover ZYN</h2>
            <p className={styles.p}>A tobacco-free alternative to smoking and vaping that come in a variety of flavours and nicotine strengths designed to satisfy your taste.
			</p>
        </div>
    );
}

export default Content;