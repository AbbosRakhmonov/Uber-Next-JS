import {useState} from "react";
import Styles from "../styles/Header.module.scss";
import HeaderCard from "./Header_Cards/HeaderCard";
import Body_1 from "./Header_Cards/Header_Bodys/HeaderBody_1"
import Body_2 from "./Header_Cards/Header_Bodys/HeaderBody_2"
import Body_3 from "./Header_Cards/Header_Bodys/HeaderBody_3"

function Header() {
    const contents = {
        first: {
            component: Body_1,
            bg_image: "/images/bg_1.webp",
        },
        second: {
            component: Body_2,
            bg_image: "/images/bg_2.webp",
        },
        third: {
            component: Body_3,
            bg_image: "/images/bg_3.webp",
        }
    };
    const [activeBgImage, setActiveBgImage] = useState("/images/bg_1.webp");
    const [activeBody, setActiveBody] = useState(contents.first.component);
    const styleHeader = {
        backgroundImage: `url(${activeBgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    const onclickListItem = (component) => {
        setActiveBody(contents[component].component);
        setActiveBgImage(contents[component].bg_image);
    }
    return (
        <header className={Styles.header} style={{...styleHeader}}>
            <div className="container">
                <div className={Styles.header__wrapper}>
                    <HeaderCard onclickListItem={onclickListItem} activeBody={activeBody}/>
                </div>
            </div>
        </header>
    );
}

export default Header;