import ModalLinks from "../ModalLinks";

function ModalBody1(props) {
    const links = [
        {
            text: "Sign in to drive & deliver",
            link: "/"
        },
        {
            text: "Sign in to ride",
            link: "/"
        },
        {
            text: "Sign in to order delivery with Uber Eats",
            link: "/"
        }
    ]
    return (
        <div className={'modal__body'}>
            {
                links.map((link, index) => {
                    return (
                       <ModalLinks key={index} text={link.text} link={link.link}/>
                    )
                })
            }
        </div>
    );
}

export default ModalBody1;