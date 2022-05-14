import Link from "next/link"
import Styles from "../styles/Navbar.module.scss"

function NavLink({text, icon}) {
    return (
        <li className={Styles.navLink}>
            <Link href="/">
                <a>{icon &&
                    <span className={Styles.navLinkIcon}>{icon}</span>}{text}</a>
            </Link>
        </li>
    );
}

export default NavLink;