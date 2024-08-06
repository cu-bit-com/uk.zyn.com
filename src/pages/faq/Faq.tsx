import global from '../../components/Global.module.css';
import styles from './Faq.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function FAQ() {
    const [collapsedStates, setCollapsedStates] = useState<boolean[]>(Array(18).fill(true));
    const [signs, setSigns] = useState<string[]>(Array(18).fill('+'));
	const [hasScrolled, setHasScrolled] = useState(false);

	
    useEffect(() => {
        const hash = window.location.hash.substring(1);

        if (hash && !hasScrolled) {
            // Extract index from the hash (format: whatHappensIfIngestZyn-14)
            const indexMatch = hash.match(/-(\d+)$/);
			

            if (indexMatch) {
                const index = parseInt(indexMatch[1], 10); 

                if (index >= 0 && index < collapsedStates.length) {
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });

                            setTimeout(() => {
                                // Open the item
                                setCollapsedStates(prevStates => {
                                    const newStates = [...prevStates];
                                    newStates[index] = false; // Open the item
                                    return newStates;
                                });

                                // Set the sign to '-'
                                setSigns(prevSigns => {
                                    const newSigns = [...prevSigns];
                                    newSigns[index] = '-';
                                    return newSigns;
                                });

                                setHasScrolled(true); // Prevent re-scrolling
                            }, 500);
                        } else {
                            console.error(`Element with ID ${hash} not found.`);
                        }
                    }, 100);
                }
            }
        }
    }, [hasScrolled, collapsedStates]);

    const toggleCollapse = (index: number) => {
        setCollapsedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Toggle the state
            return newStates;
        });

        setSigns(prevSigns => {
            const newSigns = [...prevSigns];
            newSigns[index] = !collapsedStates[index] ? '+' : '-'; // Update sign based on new state
            return newSigns;
        });
    };

    return (
        <div className={`${styles.wrapper}`}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(0)}>
                        <div className={styles.listTitle}>What is ZYN?</div>
                        <div className={styles.listTitle}>{signs[0]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[0] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN nicotine pouches are a tobacco-free nicotine product. ZYN comes in a range of different flavours and nicotine levels to offer you choices that satisfy your preferences and moments.<br />
                            Important information: ZYN nicotine pouches are not risk-free, they contain nicotine, which is addictive.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(1)}>
                        <div className={styles.listTitle}>What's ZYN made of?</div>
                        <div className={styles.listTitle}>{signs[1]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[1] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN is made up of high-quality nicotine and food-grade ingredients. The pouch itself is made from plant fibres, specially designed to release nicotine while feeling comfortable under your lip.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(2)}>
                        <div className={styles.listTitle}>Does ZYN contain tobacco?</div>
                        <div className={styles.listTitle}>{signs[2]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[2] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            No, ZYN does not contain tobacco.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(3)}>
                        <div className={styles.listTitle}>What is the difference between ZYN nicotine pouches and snus tobacco products?</div>
                        <div className={styles.listTitle}>{signs[3]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[3] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Snus is not legally available in the UK. Snus contains tobacco. ZYN nicotine pouches are tobacco-free.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(4)}>
                        <div className={styles.listTitle}>How many pouches are in one can?</div>
                        <div className={styles.listTitle}>{signs[4]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[4] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            A can of ZYN Slim contains 21 pouches. A can of ZYN Mini contains 20 pouches.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(5)}>
                        <div className={styles.listTitle}>Where is ZYN produced?</div>
                        <div className={styles.listTitle}>{signs[5]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[5] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN is produced in our factories in Scandinavia.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(6)}>
                        <div className={styles.listTitle}>Will ZYN help me quit smoking?</div>
                        <div className={styles.listTitle}>{signs[6]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[6] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN nicotine pouches are not an alternative to quitting and are not designed as cessation aids. ZYN nicotine pouches are for adults who would otherwise continue to smoke or use other nicotine products. Nicotine pouches are not risk free and contain nicotine, which is addictive. The best way to reduce nicotine-related health risks is to quit nicotine use altogether.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(7)}>
                        <div className={styles.listTitle}>Where can I buy ZYN?</div>
                        <div className={styles.listTitle}>{signs[7]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[7] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Find more information <Link className={styles.whereToBuyLink} to="../where-to-buy">here</Link>
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(8)}>
                        <div className={styles.listTitle}>When does ZYN expire?</div>
                        <div className={styles.listTitle}>{signs[8]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[8] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN nicotine pouches have a shelf-life up to 12 months from production date provided on a can.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(9)}>
                        <div className={styles.listTitle}>What is the best way to store ZYN?</div>
                        <div className={styles.listTitle}>{signs[9]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[9] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Store your ZYN pouches in the can and in a place inaccessible to children. It is not necessary to store them in the freezer or refrigerator.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(10)}>
                        <div className={styles.listTitle}>Why is there a lid on top of the can? What is it for?</div>
                        <div className={styles.listTitle}>{signs[10]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[10] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            The lid on the top of the can is for temporarily keeping used pouches until you are able to find a rubbish bin to throw them away.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(11)}>
                        <div className={styles.listTitle}>Can I reuse ZYN nicotine pouches?</div>
                        <div className={styles.listTitle}>{signs[11]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[11] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            ZYN Nicotine pouches are single use only and should never be re-used.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(12)}>
                        <div className={styles.listTitle}>Is there any risk of using ZYN?</div>
                        <div className={styles.listTitle}>{signs[12]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[12] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Nicotine pouches are not risk free and contain nicotine, which is addictive. The best way to reduce nicotine-related health risks is to quit nicotine use altogether.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(13)}>
                        <div className={styles.listTitle}>Can I use the product if I have gum disease?</div>
                        <div className={styles.listTitle}>{signs[13]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[13] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            If you have questions about whether you should use nicotine pouches given an existing health condition, you should consult a health care professional.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem} id="whatHappensIfIngestZyn-14">
                    <div className={styles.title} onClick={() => toggleCollapse(14)}>
                        <div className={styles.listTitle}>What if I ingest/swallow ZYN?</div>
                        <div className={styles.listTitle}>{signs[14]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[14] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Nicotine pouches are not meant for ingestion.<br />
                            If a ZYN nicotine pouch is swallowed by an adult, seek medical attention if needed.<br />
                            Keep nicotine pouches out of reach of children at all times. If nicotine pouch is used or swallowed by a child, seek medical attention immediately.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(15)}>
                        <div className={styles.listTitle}>How long does it take for the tingling/burning sensation to start and how long does it last?</div>
                        <div className={styles.listTitle}>{signs[15]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[15] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Some users may experience a tingling sensation. The experience varies from person to person.<br />
                            For some people the tingling sensation is felt throughout the use of a pouch, for others it subsides after some minutes. Some users do not experience it.
                        </p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.title} onClick={() => toggleCollapse(16)}>
                        <div className={styles.listTitle}>Can I recycle the can and what kind of plastic is it made of?</div>
                        <div className={styles.listTitle}>{signs[16]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[16] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            Yes, and we would like you to do so! The can is made of recyclable plastic (polypropylene (PP)) and should be sorted as plastic when you recycle. Check your local council's recycling scheme for information about how you should dispose of recyclable plastic.
                        </p>
                    </div>
                </li>
                <li className={`${styles.listItem} ${styles.last}`}>
                    <div className={styles.title} onClick={() => toggleCollapse(17)}>
                        <div className={styles.listTitle}>Can I recycle the nicotine pouches? Are they degradable?</div>
                        <div className={styles.listTitle}>{signs[17]}</div>
                    </div>
                    <div className={styles.content} style={{ display: collapsedStates[17] ? 'none' : 'block' }}>
                        <p className={styles.p}>
                            The pouch, and its contents, is not currently recyclable. Please dispose of your used ZYN pouches in general waste.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default FAQ;
