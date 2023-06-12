import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import { SlLocationPin } from "react-icons/sl";
import { RxEnvelopeClosed } from "react-icons/rx";
import {
    AiOutlinePhone,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className>
            <div className="sec-container">
                <div className="footer-container">
                    <div className="f-col-1">
                        <Logo />
                        <p className="info">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil magnam illum numquam, officiis iusto.
                        </p>
                    </div>
                    <div className="f-col-2">
                        <h4 className="header">quick links</h4>
                        <ul className="footer-menu">
                            <li>
                                <a href="#">about us</a>
                            </li>
                            <li>
                                <a href="#">contact us</a>
                            </li>
                            <li>
                                <a href="#">support</a>
                            </li>
                            <li>
                                <a href="#">site map</a>
                            </li>
                        </ul>
                    </div>
                    <div className="f-col-3">
                        <h4 className="header">Contact info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="icon">
                                    <SlLocationPin />
                                </span>
                                <span className="value">
                                    20/A M M Road, Dhaka <br />
                                    bangladesh
                                </span>
                            </li>
                            <li>
                                <span className="icon">
                                    <RxEnvelopeClosed />
                                </span>
                                <span className="value">
                                    example@gmail.com <br />
                                    example2@gmail.com
                                </span>
                            </li>
                            <li>
                                <span className="icon">
                                    <AiOutlinePhone />
                                </span>
                                <span className="value">
                                    (+880)- 1000000000 <br />
                                    (+880)- 1000000000
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="f-col-4">
                        <h4 className="header">social links</h4>
                        <ul className="footer-social">
                            <li>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FiTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsPinterest />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
