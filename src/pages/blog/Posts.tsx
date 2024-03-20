import styles from './Posts.module.css';
import global from '../../components/Global.module.css';
import image from '../../images/zyn-item.jpeg';
import { Link } from 'react-router-dom';

function Posts() {
    return (
        <div className={global.wrapper}>
            <div className={`${styles.container}`}>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
                <div className={styles.post}>
                    <img src={image} className={styles.image}></img>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel deserunt ratione temporibus fugiat rem!</p>
                    <Link className={styles.link} to='#'>Lorem, ipsum.</Link>
                </div>
            </div>
        </div>
    );
}

export default Posts;