import styles from './Content.module.css';
import global from '../../components/Global.module.css';
import image from '../../images/zyn-item.jpeg';

function Content() {
    return (
        <div className={global.wrapper}>
            <div className={styles.pageWrapper}>
                <div className={styles.item}>
                    <img src={image} className={styles.image} alt="" />
                    <div className={styles.content}>
                        <h2>WHAT ARE NICOTINE POUCHES?</h2>
                        <p className={styles.p}>ZYN® nicotine pouches are small white pouches you pop under your top lip for up to 30 minutes of nicotine. ZYN® is tobacco-free and smoke-free – so you can enjoy nicotine whenever and wherever you want. No limits. Completely discreet.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={image} className={styles.image} alt="" />
                    <div className={styles.content}>
                        <h2>HOW DO I USE ZYN?</h2>
                        <p className={styles.p}>Easy. Open the can and slip a pouch under your upper lip. Wait for the ZYN® tingle – we call it the ZYNGLE – and after a few minutes you’ll enjoy up to 30 minutes of nicotine without the need to smoke or vape. Afterwards, put the used pouch in the can’s handy compartment in the lid.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={image} className={styles.image} alt="" />
                    <div className={styles.content}>
                        <h2>WHERE DID ZYN® COME FROM?</h2>
                        <p className={styles.p}>ZYN® might be pretty new to the UK – but its history goes back much further. Proudly made by Swedish Match, ZYN® is a modern, tobacco-free version of snus (rhymes with moose), used in Sweden and Norway since the 18th century and available in pouches since the early 70s. Back in 2016 Swedish Match had a smart idea. What if we took the tobacco out - and replaced it with refined, high quality nicotine? It went pretty well. ZYN® now sells over 100 million cans in the US every year.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;