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
import image_sixteen from '../../images/whereToBuy/16.png'


function PartnerLogos() {
    return (
        <div className={global.wrapper}>
			<br />
			<br />
			<Link className={styles.itemLink} to="https://www.iqos.com/gb/en/discover-zyn/buy-zyn.html">
				<div >
					<div>
						<img className={styles.img} src={image_sixteen} alt="Iqos logo" />
					</div>
				</div>
			</Link>
			<h3 className={styles.title}>Partner Stores Selling ZYN online</h3>
			<div className={styles.wrapper}>
            <div className={`${styles.container}`}>
				<Link className={styles.itemLink} to="https://www.haypp.com/uk/nicotine-pouches/?f=Brand%3Azyn&s=rel">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_one} alt="Haypp logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.electrictobacconist.co.uk/nicotine-pouches/zyn">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_two} alt="Electric Tobacconist logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.vapesuperstore.co.uk/collections/zyn">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_three} alt="Vape Superstore logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://vapeuk.co.uk/zyn-nicotine-pouches">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_four} alt="Vape UK logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.vapeclub.co.uk/nicotine-pouches/zyn/">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_five} alt="Vape Club logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.ukecigstore.com/collections/zyn">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_six} alt="UKECIG Store logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.vapourcore.com/collections/zyn">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_seven} alt="Vapourcore logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.northerner.com/uk/zyn/">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_eight} alt="Northerner logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.bullbrand.co.uk/collections/zyn-nicotine-pouches">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_nine} alt="Bull Brand logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.alternix.com/en-gb/collections/zyn">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_ten} alt="Alternix logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.buynicotinepouches.co.uk/collections/zyn-nicotine-pouches">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_eleven} alt="BuyNicotinePouches logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://www.gopuff.com/c/zyn/br6YTJZ6">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_twelve} alt="GoPuff logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://justzapp.com/">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_thirteen} alt="Zapp logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
				<Link className={styles.itemLink} to="https://deliveroo.co.uk/">
					<div className={styles.item}>
						<div className={styles.imgContainer}>
							<img className={styles.img} src={image_fourteen} alt="Deliveroo logo" />
						</div><button className={styles.buyBtn}>Buy ZYN</button>
					</div>
				</Link>
            </div>
		</div>
        </div>
    );
}

export default PartnerLogos;