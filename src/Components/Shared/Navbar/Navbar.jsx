import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { LuSunMoon, LuMoon } from "react-icons/lu";
import profile from "../../../assets/profile.png";

const Navbar = () => {
    // For Small device main-menu Handling (Part-I)
    const main_menu_ref = useRef();
    const [show_main_menu, set_show_main_menu] = useState(false);

    // For Profile menu Handing (Part-I)
    const profile_menu_ref = useRef();
    const [show_profile_menu, set_show_profile_menu] = useState(false);

    // For small device main-menu Handling (Part-II)
    useEffect(() => {
        const outside_close_handler = (e) => {
            if (!main_menu_ref.current.contains(e.target)) {
                set_show_main_menu(false);
            }
        };

        // connecting handler
        document.addEventListener("mousedown", outside_close_handler);

        // clean out
        return () => {
            document.removeEventListener("mousedown", outside_close_handler);
        };
    }, [show_main_menu]);

    // For Profile menu Handing (Part-II)
    useEffect(() => {
        const outside_close_handler = (e) => {
            if (!profile_menu_ref.current.contains(e.target)) {
                set_show_profile_menu(false);
            }
        };

        // connecting handler
        document.addEventListener("mousedown", outside_close_handler);

        // clean out
        return () => {
            document.removeEventListener("mousedown", outside_close_handler);
        };
    }, [show_profile_menu]);
    return (
        <header className="nav-wrapper">
            <div className="nav-container">
                <div className="start-col">
                    <div
                        className="hamburger-icon"
                        onClick={() => set_show_main_menu(!show_main_menu)}
                    >
                        <FaBars />
                        {/* Dropdown-menu */}
                        <ul
                            className={`main-menu ${show_main_menu && "show"}`}
                            ref={main_menu_ref}
                        >
                            <li>
                                <a href="#" className="menu-link">
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    about
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="rider-brand">
                        rider
                    </a>
                </div>
                <div className="center-col">
                    <nav>
                        <ul className="main-menu">
                            <li>
                                <a href="#" className="menu-link">
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    about
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="end-col">
                    <span className="mode-icon">
                        <LuSunMoon />
                    </span>
                    <div className="profile">
                        <img
                            src={profile}
                            alt=""
                            onClick={() =>
                                set_show_profile_menu(!show_profile_menu)
                            }
                        />
                        {/* Dropdown-menu */}
                        <ul
                            className={`profile-menu ${
                                show_profile_menu && "show"
                            }`}
                            ref={profile_menu_ref}
                        >
                            <li>
                                <a href="#" className="menu-link">
                                    profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    settings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu-link">
                                    logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
