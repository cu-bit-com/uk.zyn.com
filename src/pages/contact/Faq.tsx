import { useState } from 'react';
import global from '../../components/Global.module.css';
import styles from './Faq.module.css';

function FAQ() {
    
    const [collapsedStates, setCollapsedStates] = useState<boolean[]>(Array(9).fill(true)); // Initialize collapsed state for each item
    const [signs, setSigns] = useState<string[]>(Array(9).fill('+'));

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

    return (
        <div className={global.wrapper}>
            <ul className={styles.list}>
               <li className={styles.listItem} onClick={() => toggleCollapse(0)}>
                <div className={styles.title}><div className={styles.listTitle}>WHAT IS ZYN?</div><div className={styles.listTitle}>{signs[0]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[0] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                        ZYN® nicotine pouches are small white pouches you pop under your top lip for up to 30 minutes of nicotine. ZYN® is tobacco-free and smoke-free – so you can enjoy nicotine whenever and wherever you want. Choose between 9 refreshing flavours and 6 different strengths.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(1)}>
                <div className={styles.title}><div className={styles.listTitle}>WHAT'S ZYN MADE OF?</div><div className={styles.listTitle}>{signs[1]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[1] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    ZYN® is made up of high quality nicotine and food-grade ingredients. The pouch itself is made from plant fibres, specially designed to release nicotine while feeling comfortable under your lip.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(2)}>
                <div className={styles.title}><div className={styles.listTitle}>WHERE IS ZYN PRODUCED?</div><div className={styles.listTitle}>{signs[2]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[2] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    ZYN® is produced in Scandinavia by Swedish Match. Since 1915, Swedish Match has pioneered the research, development and manufacturing of industry-leading snus and related products.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(3)}>
                <div className={styles.title}><div className={styles.listTitle}>IS THERE ANY RISK OF USING ZYN?</div><div className={styles.listTitle}>{signs[3]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[3] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    ZYN® contains nicotine which is a highly addictive substance and should only be used by people over 18 years of age.

                    Nicotine affects blood circulation, raises the heart rate and contracts blood vessels. People with any type of heart problem, such as irregular heartbeat or angina, should therefore avoid all types of nicotine products, including ZYN®. We also do not recommend using the product during pregnancy or breastfeeding.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(4)}>
                <div className={styles.title}><div className={styles.listTitle}>DOES ZYN DISCOLOUR TEETH?</div><div className={styles.listTitle}>{signs[4]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[4] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    Swedish Match has done laboratory tests showing that ZYN® does not discolor enamel. However, as with most things, it cannot be completely ruled out that there may be a small risk that ZYN® may cause discoloration of teeth.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(5)}>
                <div className={styles.title}><div className={styles.listTitle}>CAN I USE THE PRODUCT IF I HAVE GUM DISEASE?</div><div className={styles.listTitle}>{signs[5]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[5] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                        We cannot give health related advice at an individual level, we recommend that you discuss this with your dentist.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(6)}>
                <div className={styles.title}><div className={styles.listTitle}>WHERE CAN I BUY ZYN?</div><div className={styles.listTitle}>{signs[6]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[6] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                        Right here at uk.ZYN.com. ZYN® is also available at Sainsbury’s, Waitrose, Evapo and many independent vape and tobacconist stores.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(7)}>
                <div className={styles.title}><div className={styles.listTitle}>SUSTAINABILITY</div><div className={styles.listTitle}>{signs[7]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[7] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    <span className={styles.strong}>WHAT DOES MASS BALANCE MEAN?</span><br /><br />

                    The mass balance method provides us with an opportunity to communicate our undertaking on the ZYN cans, and to explain that they consist to 90 percent of bio-based plastic, even though the can you are holding in your hand may not. The fact that the cans do not consist of 100-percent bio-based plastic is because other substances are added as well as the plastic, such as plasticizers, during manufacturing.

                    Since the plastic now consists of recycled resources rather than crude oil, the climate footprint of the packaging of the three trademarks is reduced by 100 percent.

                    When we now start to use the mass balance method, it means that we ensure that a certain amount of bio-based material is in the system, corresponding to the plastic needed to manufacture the cans and labels forZYN.

                    <br /><br /><span className={styles.strong}>CAN THE MASS BALANCE REDUCE THE CLIMATE FOOTPRINT?</span><br /><br />

                    Because the bio-based quantity of 90 percent of the packaging has a very low climate footprint (or more precisely has a negative climate footprint, which is actually the opposite to warming), the total value is less than 0. The climate footprint of the packaging is thus reduced by 100 percent

                    <br /><br /><span className={styles.strong}>WHAT DOES BIO-BASED PLASTIC CONSIST OF?</span><br /><br />

                    What the bio-based plastic consists of can vary over time, but it is always made either of recycled or renewable resources. The material is either residue from refineries or waste from the food industry, which comes from sources under controlled forms. The material originates from the natural plant kingdom but is classified as “recycled resources.”

                    <br /><br /><span className={styles.strong}>WHY IS THE MASS BALANCE METHOD BETTER THAN MANUFACTURE NEW PACKAGING FROM BIO-MATERIAL?</span><br /><br />

                    Without the mass balance method, switching the material in our packaging to bio-based plastic would have required us to replace the machinery that currently manufactures our cans. This is a time-consuming and costly process. By choosing material that is bio-based through the mass balance method, we enable a more rapid transition and can ensure more sustainable packaging that reduces our climate footprint.

                    Without the mass balance method, switching the material in our packaging to bio-based plastic would have required us to replace the machinery that currently manufactures our cans. This is a time-consuming and costly process. By choosing material that is bio-based through the mass balance method, we enable a more rapid transition and can ensure more sustainable packaging that reduces our climate footprint.
                    </p>
                </div>
               </li>
               <li className={styles.listItem} onClick={() => toggleCollapse(8)}>
                <div className={styles.title}><div className={styles.listTitle}>HOW CAN I SAVE MONEY WITH ZYN?</div><div className={styles.listTitle}>{signs[8]}</div></div>
                <div className={styles.content} style={{ display: collapsedStates[8] ? 'none' : 'block'}}>
                    <p className={styles.p}>
                    The average cost of a pack of cigarettes in the UK is £12.19, and a can of ZYN® tobacco-free nicotine pouches is £6.50. That’s a saving of 47% and up to £80 a month by switching to ZYN®

                    Here’s what we used to work this out:

                    - How many cigarettes do people smoke a day? Obviously, everyone’s different, so we take the average: 12.8**. We compare this to 12.8 nicotine pouches to keep things simple.

                    - How many packs of cigarettes/nicotine pouches do people buy a month?

                    We work this out based on the average consumption. Note, we’re using ZYN® Cool Mint 9MG for comparison, with 16 pouches in each can. Every other ZYN® comes in cans of 20 – so you’d save even more with another flavour or strength.
                    </p>
                </div>
               </li>
            </ul>
        </div>
    );
}

export default FAQ;