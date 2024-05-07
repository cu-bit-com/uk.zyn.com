import styles from './Image.module.css';
import global from '../../components/Global.module.css';

function Image() {
    return (
        <div className={`${global.wrapper} ${styles.container}`}>
            IMAGE
        </div>
    );
}

export default Image;