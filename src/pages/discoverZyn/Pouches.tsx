import { useState } from 'react';
import styles from './Pouches.module.css';
import global from '../../components/Global.module.css';

function Pouches() {

	const [collapsedStates, setCollapsedStates] = useState<boolean[]>(Array(4).fill(true));
    const [signs, setSigns] = useState<string[]>(Array(4).fill('+'));

    const toggleCollapse = (index: number) => {
        setCollapsedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
        setSigns(prevSigns => {
            const newSigns = [...prevSigns];
            newSigns[index] = collapsedStates[index] ? '-' : '+';
            return newSigns;
        });
    };

	const scrollToTop = () => {
		window.scrollTo({
		  top: 0
		});
	  };

    return (
        <div className={global.wrapper}>
			<br />
			<br />
            <h2>Discover ZYN FAQ's</h2>
            <ul className={styles.list}>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(0)}><div className={styles.listTitle}>What is ZYN?</div><div className={styles.listTitle}>{signs[0]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[0] ? 'none' : 'block'}}>
                    <p className={styles.p}>
					ZYN nicotine pouches are a tobacco-free nicotine product. ZYN comes in a range of different flavours and nicotine levels to offer you choices that satisfy your preferences and moments.
					<br />
					Important information: ZYN nicotine pouches are not risk-free, they contain nicotine, which is addictive.
                    </p>
                </div>
               </li>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(1)}><div className={styles.listTitle}>Does ZYN contain tobacco?</div><div className={styles.listTitle}>{signs[1]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[1] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    No, ZYN does not contain tobacco.
                    </p>
                </div>
               </li>
            </ul>
        </div>
    );
}

export default Pouches;
