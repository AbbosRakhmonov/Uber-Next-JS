import {useState} from "react";
import Styles from "../../../styles/Header.module.scss";
import CardInput from "../CardInput";

function HeaderBody3() {
    return (<div className={Styles.cardBody}>
        <h5 className={Styles.cardTitle}>
            Request a ride now
        </h5>
        <CardInput/>
        <div className={Styles.cardActions}>
            <button className={`${Styles.cardActionsBtn} primary-btn`}>Sign up to drive</button>
            <button className={`${Styles.cardActionsBtn} secondary-btn`}>Schedule for later</button>
        </div>
    </div>);
}

export default HeaderBody3;