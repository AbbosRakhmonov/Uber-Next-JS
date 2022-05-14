import CardLinks from "../Card_Links";
import Styles from "../../../styles/Header.module.scss";

function HeaderBody2() {
    return (
        <div className={Styles.cardBody}>
            <h5 className={Styles.cardTitle}>
                Discover delicious eats
            </h5>
            <p className={Styles.cardText}>Order delivery from restaurants you love.</p>
            <div className={Styles.cardActions}>
                <button className={`${Styles.cardActionsBtn} primary-btn`}>Order now</button>
                <CardLinks text={'Own a restaurant? Partner with Uber Eats'} link={'/'} />
            </div>
        </div>
    );
}

export default HeaderBody2;