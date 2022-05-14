import Image from "next/image";
import Styles from "../../styles/Header.module.scss";
import {useState} from "react";

function HeaderLinks({onclickListItem}) {
    const [activeLink, setActiveLink] = useState(false);
    const handleClick = (component) => {
        setActiveLink(component);
        onclickListItem(component)
        console.log(component)
    }
    const links = [
        {
            id: 1,
            title: 'Driver or deliver',
            icon: "/icons/Earn-filled.svg",
            component: "first",
        },
        {
            id: 2,
            title: 'Eat',
            icon: "/icons/restaurant-outlined.svg",
            component: "second",
        },
        {
            id: 3,
            title: 'Ride',
            icon: "/icons/car-front-outlined.svg",
            component: "third",
        }
    ]
    return (
        <ul className={`${Styles.cardHeaderList} ${activeLink ? `active-${activeLink}` : ""}`}>
            {
                links.map(link => <li key={link.id} onClick={()=>handleClick(link.component)}>
                    <div className="img-container">
                        <Image src={link.icon} width={24} height={24} alt={link.title}/>
                    </div>
                    <p>{link.title}</p>
                </li>)
            }
        </ul>
    );
}

export default HeaderLinks;