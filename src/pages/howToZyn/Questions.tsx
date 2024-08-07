import { useState } from "react";
import global from "../../components/Global.module.css"
import styles from "./Questions.module.css"
import { Link } from "react-router-dom";

function Questions() {

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
			<h3>Have more questions?</h3>
			<ul className={styles.list}>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(0)}><div className={styles.listTitle}>What are ZYN nicotine pouches?</div><div className={styles.listTitle}>{signs[0]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[0] ? 'none' : 'block'}}>
                    <p className={styles.p}>
					Nicotine pouches are a modern tobacco-free & smoke-free alternative for nicotine users.<br/><Link className={styles.link} to="../discover-zyn" onClick={scrollToTop}>Click here to learn more.</Link>
                    </p>
                </div>
               </li>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(1)}><div className={styles.listTitle}>Which ZYN nicotine pouch is right for me?</div><div className={styles.listTitle}>{signs[1]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[1] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    ZYN nicotine pouches are available in a variety of nicotine strengths and pouch sizes so you can choose the intensity of your nicotine experience.<br/><br/><strong>If you are a nicotine user looking for a new alternative:</strong> We suggest starting with a lower nicotine strength: try Mini (6mg) pouches from the ZYN range.<br/><br/><strong>If you are a nicotine pouch user:</strong> Discover our Slim pouches: Strong (9.5mg), X-Strong (11mg), and XX-Strong (12.5mg)<br/><Link className={styles.link} to="../which-zyn-to-choose" onClick={scrollToTop}>Read more here.</Link>
                    </p>
                </div>
               </li>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(2)}><div className={styles.listTitle}>Can I use different ZYN nicotine pouches at the same time? And can I try different flavours or strengths in the same day?</div><div className={styles.listTitle}>{signs[2]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[2] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    Do not use more than one ZYN nicotine pouch at the same time. ZYN nicotine pouches in different strengths and flavours can be used in the same day depending on legal age user’s nicotine preferences.
                    </p>
                </div>
               </li>
               <li className={styles.listItem}>
                <div className={styles.title} onClick={() => toggleCollapse(3)}><div className={styles.listTitle}>How to dispose of ZYN nicotine pouches?</div><div className={styles.listTitle}>{signs[3]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[3] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    Once you’re done, you can temporarily dispose of used ZYN nicotine pouches in the compartment on the lid of the pack and permanently dispose of them in your household bin or in a public waste container. Empty the can before recycling . Please also remember to store and dispose of nicotine pouches in a place inaccessible to children.
                    </p>
                </div>
               </li>
            </ul>
		</div>
	)
}

export default Questions;