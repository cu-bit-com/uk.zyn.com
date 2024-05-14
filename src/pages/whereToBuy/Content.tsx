import styles from './Content.module.css';
import global from '../../components/Global.module.css';
import image_one from '../../images/whereToBuy/15.png'
import { Link } from 'react-router-dom';

function Content() {
    return (
        <div className={global.wrapper}>
			<h3>Find ZYN Nicotine Pouches in Store</h3>
			<br />
            <p className={styles.p}>Find ZYN at Saintsbury’s, Morrisons BP, Waitrose & WHSmith’s Travel</p>

			<div className={styles.logos}>
				<Link to="https://www.whsmith.co.uk/"><img src={image_one} width="200px" alt="" /></Link>
			</div>
        </div>
    );
}

export default Content;