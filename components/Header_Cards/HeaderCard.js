import HeaderLinks from "./Header_Links";
import Styles from "../../styles/Header.module.scss";
function HeaderCard({onclickListItem,activeBody}) {
    return (
        <div className={Styles.card}>
            <div className={Styles.cardHeader}>
                <HeaderLinks onclickListItem={onclickListItem} />
            </div>
            {activeBody}
        </div>
    );
}

export default HeaderCard;