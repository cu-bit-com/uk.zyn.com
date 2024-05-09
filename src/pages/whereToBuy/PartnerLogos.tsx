import styles from './PartnerLogos.module.css';
import global from '../../components/Global.module.css';
import { Link } from 'react-router-dom';
import image_one from '../../images/whereToBuy/1.png';
import image_two from '../../images/whereToBuy/2.png';
import image_three from '../../images/whereToBuy/3.png';
import image_four from '../../images/whereToBuy/4.png';
import image_five from '../../images/whereToBuy/5.png';
import image_six from '../../images/whereToBuy/6.png';
import image_seven from '../../images/whereToBuy/7.png';
import image_eight from '../../images/whereToBuy/8.png';
import image_nine from '../../images/whereToBuy/9.png';
import image_ten from '../../images/whereToBuy/10.png';
import image_eleven from '../../images/whereToBuy/11.png';
import image_twelve from '../../images/whereToBuy/12.png';
import image_thirteen from '../../images/whereToBuy/13.png';
import image_fourteen from '../../images/whereToBuy/14.png';
import image_fifteen from '../../images/whereToBuy/15.png';


function PartnerLogos() {
    return (
        <div className={global.wrapper}>
			<br />
			<br />
			<h3>Find ZYN Nicotine Pouches Online</h3>
            <div className={`${styles.container}`}>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_one} alt="Haypp logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.haypp.com/uk/">Haypp</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_two} alt="Electric Tobacconist logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.electrictobacconist.co.uk/">Electric Tobacconist</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_three} alt="Vape Superstore logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.vapesuperstore.co.uk/">Vape Superstore</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_four} alt="Vape UK logo" />
				</div>
				<Link className={styles.itemLink} to="https://vapeuk.co.uk/">Vape UK</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_five} alt="Vape Club logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.vapeclub.co.uk/">Vape Club</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_six} alt="UKECIG Store logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.ukecigstore.com/">UKECIG Store</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_seven} alt="Vapourcore logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.vapourcore.com/">Vapourcore</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_eight} alt="Northerner logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.northerner.com/uk/">Northerner</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_nine} alt="Bull Brand logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.bullbrand.co.uk/">Bull Brand</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_ten} alt="Alternix logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.alternix.com/">Alternix</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_eleven} alt="BuyNicotinePouches logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.buynicotinepouches.co.uk/">BuyNicotinePouches</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_twelve} alt="GoPuff logo" />
				</div>
				<Link className={styles.itemLink} to="https://www.gopuff.com/gb/">GoPuff</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_thirteen} alt="Zapp logo" />
				</div>
				<Link className={styles.itemLink} to="https://justzapp.com/">Zapp</Link>
			</div>
			<div className={styles.item}>
				<div className={styles.imgContainer}>
					<img className={styles.img} src={image_fourteen} alt="Deliveroo logo" />
				</div>
				<Link className={styles.itemLink} to="https://deliveroo.co.uk/">Deliveroo</Link>
			</div>

            </div>
        </div>
    );
}

export default PartnerLogos;