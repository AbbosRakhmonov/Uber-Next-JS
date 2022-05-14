import ModalLinks from "../ModalLinks";

function ModalBody2(props) {
    const links = [
        {
            text: "Sign up to drive & deliver",
            link: "/"
        },
        {
            text: "Create a rider account",
            link: "/"
        },
        {
            text: "Order delivery with Uber Eats",
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

export default ModalBody2;