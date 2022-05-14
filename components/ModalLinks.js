import Styles from "../styles/Navbar.module.scss";
import Link from "next/link";

function ModalLinks({link, text}) {
    return (
        <div className={"modalLinks"}>
            <Link href={link}>
                <a>{text} <span><svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path
                    d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"/></svg></span></a>
            </Link>
        </div>
    );
}

export default ModalLinks;