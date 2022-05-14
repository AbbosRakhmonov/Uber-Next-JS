import CardLinks from "../Card_Links";
import Styles from "../../../styles/Header.module.scss";

function HeaderBody1() {
    return (
        <div className={Styles.cardBody}>
            <h5 className={Styles.cardTitle}>
                Get in the driver’s seat and get paid
            </h5>
            <p className={Styles.cardText}>Drive on the platform with the largest network of active riders.</p>
            <div className={Styles.cardActions}>
                <button className={`${Styles.cardActionsBtn} primary-btn`}>Sign up to drive</button>
                <CardLinks text={'Learn more about driving and delivering'} link={'/'} />
            </div>
        </div>
    );
}

export default HeaderBody1;