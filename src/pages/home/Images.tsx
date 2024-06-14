import styles from "./Images.module.css";
import global from "../../components/Global.module.css";
import image_one from "../../images/products/4294.png";
import image_two from "../../images/products/4295.png";
import image_three from "../../images/products/4296.png";
import image_four from "../../images/products/4297.png";
import image_five from "../../images/products/4299.png";
import image_six from "../../images/products/4298.png";
import image_seven from "../../images/products/4302.png";
import image_eight from "../../images/products/4300.png";
import image_nine from "../../images/products/4301.png";
import { Link } from "react-router-dom";

function Images() {
  return (
    <div className={global.wrapper}>
      <div className={styles.mini_range}>
        <h3>Mini range</h3>
        <p>
          If you are a nicotine user looking for a new alternative, we suggest
          starting with a lower nicotine strength, try our Mini (6mg) pouches.
        </p>
        <div className={styles.container}>
          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_one}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Cool Mint Mini - 6mg</h3>
                <p className={styles.itemP}>
                  A cooling taste of menthol with hints of peppermint
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_two}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Citrus Mini - 6mg</h3>
                <p className={styles.itemP}>
                  A taste of citrus fruits with hints of lemongrass
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_three}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Espressino Mini - 6mg</h3>
                <p className={styles.itemP}>
                  A taste of freshly roasted coffee with hints of cocoa and
                  caramel
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>
        </div>

        <h3>Regular range</h3>
        <p>
          If you are a nicotine pouch user looking for fuller nicotine
          experience, discover our Slim (9.5-12.5mg) puches.
        </p>
        <div className={styles.container}>
          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_four}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Cool Mint 9.5mg - Slim</h3>
                <p className={styles.itemP}>
                  An intense cooling taste of fresh peppermint
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_five}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Icy Mint 9.5mg - Slim</h3>
                <p className={styles.itemP}>
                  A cooling taste of eucalyptus and menthol
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_six}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Cool Mint 11mg - Slim</h3>
                <p className={styles.itemP}>
                  An intense cooling taste of fresh peppermint
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_seven}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>
                  ZYN Chili Guava 11mg - Slim
                </h3>
                <p className={styles.itemP}>
                  A fruity taste of guava and chili
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_eight}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>ZYN Icy Mint 12.5mg - Slim</h3>
                <p className={styles.itemP}>
                  A cooling taste of eucalyptus and menthol
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>

          <Link className={styles.itemLink} to="/where-to-buy">
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={image_nine}></img>
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>
                  ZYN Icy Blackcurrant 12.5mg - Slim
                </h3>
                <p className={styles.itemP}>
                  A cooling taste of menthol topped with the flavour of dark
                  berries
                </p>
                <span className={styles.linkSpan}>Find Zyn</span>
              </div>
            </div>
          </Link>
          <div className={styles.discover_zyn}>
            <button className={styles.learn_more}>
              {" "}
              <Link to="/discover-zyn">Discover More About ZYN</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
