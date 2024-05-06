import styles from './Info.module.css';
import global from '../../components/Global.module.css';

function Info() {
    return(
        <div className={global.wrapper}>
            <div className={styles.contact}>
                If you still need help feel free to contact us using this e-mail: *email*
            </div>
        </div>
    );
}

export default Info;