import styles from './Content.module.css';
import global from '../../Global.module.css';

function Content() {
    return (
        <div className={global.wrapper}>
            <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam laborum beatae corrupti vel, et mollitia tempora accusamus pariatur distinctio in possimus sit, exercitationem fugit! Repellendus, laborum. Veniam deserunt, ad excepturi ipsam voluptate odit consequatur, beatae quas tenetur temporibus nihil neque? Esse unde dignissimos, optio praesentium assumenda vero illo molestias iusto!</p>
        </div>
    );
}

export default Content;