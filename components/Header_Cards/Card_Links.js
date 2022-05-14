import Link from "next/link";

function CardLinks({link, text}) {
    return (
        <span className={'actionsLinkContainer'}>
            <Link href={link}>
                 <a className={"actionsLink"}>{text}</a>
            </Link>
       </span>
    );
}

export default CardLinks;