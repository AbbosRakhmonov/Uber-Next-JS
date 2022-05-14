import NavLink from "./NavLink";
import Styles from "../styles/Navbar.module.scss"
import Link from "next/link";
import {Dropdown, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader} from "reactstrap";
import React, {useEffect, useState} from "react";
import ModalBody1 from "./Modal_Bodys/ModalBody_1";
import ModalBody2 from "./Modal_Bodys/ModalBody_2";

export default function Navbar() {
    const [companyOpen, setCompanyOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [activeModalBody, setActiveModalBody] = useState(1);
    const toggleModal = () => setModalVisible(!modalVisible);
    const handleClickFormButton = (id) => {
        if (!modalVisible) {
            setModalVisible(true);
        }
        setActiveModalBody(id);
    };
    const handleClickDropDown = (id) => {
        if (id === 1) {
            setCompanyOpen(!companyOpen);
        } else {
            setProductsOpen(!productsOpen);
        }
        if (modalVisible){
            setModalVisible(false);
        }
    };
    useEffect(() => {
        document.body.style.overflow = modalVisible ? "hidden" : "auto";
    }, [modalVisible])
    return (
        <>
            <nav className={Styles.nav}>
                <div className={Styles.nav__wrapper}>
                    <div className={Styles.nav__left}>
                        <Link href={'/'}>
                            <a className={Styles.nav__left__logo}>Uber</a>
                        </Link>
                        <div className={Styles.nav__left__menu}>
                            <ul>
                                <Dropdown toggle={() => handleClickDropDown(1)} isOpen={companyOpen}>
                                    <DropdownToggle className={Styles.navLink}>
                                        Company <span className={Styles.navLinkCaret}><svg width="18" height="18"
                                                                                           viewBox="0 0 24 24"
                                                                                           fill="none"><path
                                        d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8z" fill="currentColor"/></svg></span>
                                    </DropdownToggle>
                                    <DropdownMenu
                                        className={Styles.nav__dropdown__menu}>
                                        <ul>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>About us</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Our offerings</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>How Uber works</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Global citizenship</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Newsroom</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Investor Relations</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Blog</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Careers</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </DropdownMenu>
                                </Dropdown>
                                {["Safety", "Help"].map((item, index) => {
                                    return (<NavLink key={index} text={item}/>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.nav__right}>
                        <div className={Styles.nav__right__menu}>
                            <ul>
                                <Dropdown toggle={() => handleClickDropDown(2)} isOpen={productsOpen}>
                                    <DropdownToggle className={Styles.navLink}>
                                <span className={Styles.navLinkCaret}><svg width="14" height="14" viewBox="0 0 14 14"
                                                                           fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                                      fill="white"/>
                            </svg></span> Products
                                    </DropdownToggle>
                                    <DropdownMenu
                                        className={`${Styles.nav__dropdown__menu__right} right-dropdown`}>
                                        <ul>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><path
                                                        d="M12 1L2 10.1V23h20V10.1L12 1zm7 19h-5v-6h-4v6H5v-8.6L12 5l7 6.4V20z"
                                                        fill="currentColor"/></svg></span>Home</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Car front</title><path
                                                        d="M21 9l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1z"
                                                        fill="currentColor"/></svg></span>Ride</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>
                                                <span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <title>Steering wheel</title>
                                                    <path
                                                        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </span>Drive</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Restaurant</title><g
                                                        fill="currentColor"><path
                                                        d="M11 8V1H9v7H7V1H5v7H3V1H1v7c0 2.3 1.5 4.2 3.5 4.8V23h3V12.8c2-.7 3.5-2.6 3.5-4.8z"/><path
                                                        fillRule="evenodd" clipRule="evenodd"
                                                        d="M13 6c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6zm5 4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2z"/></g></svg></span>Eat</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>
                                                <span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <title>Wine</title>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M20 3v4.4c1.8.8 3 2.6 3 4.6v11H13V12c0-2.1 1.2-3.8 3-4.6V3h-1V1h6v2h-1zm-4 9v8h4v-8c0-.8-.5-1.5-1.2-1.8l-.8-.3-.8.3c-.7.3-1.2 1-1.2 1.8zM4.5 16.7C2.5 16.1 1 14.2 1 12V7h10v5c0 2.2-1.5 4.1-3.5 4.7V20H10v3H2v-3h2.5v-3.3zM8 10H4v2c0 1.1.9 2 2 2s2-.9 2-2v-2z"
                                                          fill="currentColor"/>
                                                </svg>
                                            </span>Merchants</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Truck</title><path
                                                        d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1zM6 17h4v-3H6V9h12v5h-4v3h4v1H6v-1zM19 4v2H5V4h14z"
                                                        fill="currentColor"/></svg></span>Freight</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Car front</title><path
                                                        d="M21 9l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1z"
                                                        fill="currentColor"/></svg></span>Bike & scoot</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Bike jump</title><path
                                                        d="M24 5h-6.67l-.83-2H12v3h2.5l1.15 2.76L11.38 13h-.62L7.49 5H3v3h2.5l.43 1.03C5.79 9.02 5.65 9 5.5 9A5.51 5.51 0 000 14.5C0 17.53 2.47 20 5.5 20c2.51 0 4.63-1.7 5.29-4h1.83l.48-.48A5.505 5.505 0 0018.5 20c3.03 0 5.5-2.47 5.5-5.5 0-1.74-.81-3.29-2.08-4.3L24 8.12V5zM5.5 17a2.5 2.5 0 11.002-5.002A2.5 2.5 0 015.5 17zm14.38-9l-.91.91-.39-.91h1.3zm-1.38 9a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                                                        fill="currentColor"/></svg></span>Transit</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a><span><svg width="16" height="16" viewBox="0 0 24 24"
                                                                  fill="none"><title>Money</title><path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1 20V4h22v16H1zm16-6h3V7H7v3H4v7h13v-3zm-2-2a3 3 0 11-6 0 3 3 0 016 0z"
                                                        fill="currentColor"/></svg></span>Money</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </DropdownMenu>
                                </Dropdown>
                                <li className={Styles.navLink} onClick={() => handleClickFormButton(1)}>
                                    <Link href="/">
                                        <a>
                                    <span className={Styles.navLinkIcon}><svg width="16" height="16" viewBox="0 0 24 24"
                                                                              fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3z"
                                      fill="currentColor"/>
                            </svg></span>Login</a>
                                    </Link>
                                </li>
                                <button className={Styles.navButton} onClick={() => handleClickFormButton(2)}>
                                    Sign up
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`modalWrapper ${modalVisible ? "show" : ""}`}>
                <div className="custom__modal">
                    <div className="container">
                        <div className="modal__content">
                            <div className="modal__header">
                                <button className={"modal__btn"} onClick={() => setModalVisible(false)}>
                                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M18.1 8.1l-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9z"
                                            fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                            {
                                activeModalBody === 1 ? <ModalBody1/> : <ModalBody2/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}