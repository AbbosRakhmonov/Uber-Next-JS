import Styles from "../../styles/Header.module.scss";

function CardInput() {
    return (
        <div className={Styles.inputContainer}>
            <div className={Styles.cardInput}>
                <input type={"text"} placeholder={"Enter pickup location"}/>
                <div className={Styles.datalist} id="countries">

                </div>
                <button className={Styles.cardInputIcon}>
                    <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor"
                         viewBox="0 0 24 24" tabIndex="0" role="button" aria-label="Locate me"
                         className="pe-location-fetch bu tm ch tn ic to">
                        <path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"/>
                    </svg>
                </button>
            </div>
            <div className={Styles.cardInput}>
                <input type={"text"}  placeholder={"Enter Destination"}/>
                <div className={Styles.datalist} id="countries">

                </div>
                <button className={Styles.cardInputIcon}>
                    <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor"
                         viewBox="0 0 24 24" tabIndex="0" role="button" aria-label="Locate me"
                         className="pe-location-fetch bu tm ch tn ic to">
                        <path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"/>
                    </svg>
                </button>
            </div>
            <div className={Styles.inputShapes}></div>
        </div>
    );
}

export default CardInput;