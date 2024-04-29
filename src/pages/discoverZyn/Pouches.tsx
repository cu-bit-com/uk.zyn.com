import { useState } from 'react';
import styles from './Pouches.module.css';
import global from '../../components/Global.module.css';

function Pouches() {
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={global.wrapper}>
            <h2 className={styles.title}>What are Nicotine Pouches?</h2>
            <p className={styles.p}>Nicotine pouches are a modern tobacco-free & smoke-free alternative for nicotine users. Although nicotine pouches haven’t been around long, they have quickly become popular in Scandinavia, and elsewhere, because they are simple to use and convenient.</p>
            {isHidden && (
                <button className={styles.btn} onClick={toggleHidden}>Read More</button>
            )}
            {!isHidden && (
                <div className={styles.hidden}>
                    With no ash, no smoke & no smoke smell, nicotine pouches are a cleaner way to enjoy nicotine. They also don’t require any device & are simple to use – you just place the small, white pouches between your upper lip and gum & enjoy the flavor & nicotine as they are released. Smoke-free, tobacco-free & device-free, nicotine pouches don’t cause any bother to those around you & nor do they leave any smoke smell or odor on hair or clothes like cigarettes. So whether you use cigarettes, vape, heated tobacco or snus, nicotine pouches could be an alternative for your nicotine moment.
                </div>
            )}
        </div>
    );
}

export default Pouches;
