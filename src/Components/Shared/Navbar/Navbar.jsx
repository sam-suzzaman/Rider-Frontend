import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { LuSunMoon, LuMoon } from "react-icons/lu";
import profile from "../../../assets/profile.png";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    // For Small device main-menu Handling (Part-I)
    const main_menu_ref = useRef();
    const main_menu_btn_ref = useRef();
    const [show_main_menu, set_show_main_menu] = useState(false);

    // For Profile menu Handing (Part-I)
    const profile_menu_ref = useRef();
    const profile_menu_btn_ref = useRef();
    const [show_profile_menu, set_show_profile_menu] = useState(false);

    // For Theme Toggler (Part-I)
    const [rider_theme, set_rider_theme] = useState(
        localStorage.getItem("rider-theme") || "rider-light-theme"
    );

    // For small device main-menu Handling (Part-II)
    useEffect(() => {
        const outside_close_handler = (e) => {
            if (
                !main_menu_ref.current.contains(e.target) &&
                !main_menu_btn_ref.current.contains(e.target)
            ) {
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
            if (
                !profile_menu_ref.current.contains(e.target) &&
                !profile_menu_btn_ref.current.contains(e.target)
            ) {
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

    // Theme Toggler Function  (Part-II)
    const toggle_theme_handler = (e) => {
        if (e.target.checked) {
            set_rider_theme("rider-dark-theme");
        } else {
            set_rider_theme("rider-light-theme");
        }
    };
    // Theme Toggler Function  (Part-III)
    useEffect(() => {
        // setting theme
        document.querySelector("body").setAttribute("data-theme", rider_theme);
        localStorage.setItem("rider-theme", rider_theme);
    }, [rider_theme]);

    return (
        <header className="nav-wrapper">
            <div className="nav-container">
                <div className="start-col">
                    <div
                        className="hamburger-icon"
                        onClick={() => set_show_main_menu((prev) => !prev)}
                        ref={main_menu_btn_ref}
                    >
                        <FaBars />
                        {/* Dropdown-menu */}
                        <ul
                            className={`main-menu ${show_main_menu && "show"}`}
                            ref={main_menu_ref}
                        >
                            <li>
                                <Link
                                    to="/Rider-Frontend"
                                    className="menu-link"
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Rider-Frontend/booking-page"
                                    className="menu-link"
                                >
                                    booking
                                </Link>
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
                            <li>
                                <Link
                                    to="/Rider-Frontend/signup"
                                    className="menu-link"
                                >
                                    signup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Rider-Frontend/signin"
                                    className="menu-link"
                                >
                                    signin
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* logo */}
                    <Logo />
                </div>
                <div className="center-col">
                    <nav>
                        <ul className="main-menu">
                            <li>
                                <Link
                                    to="/Rider-Frontend"
                                    className="menu-link"
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Rider-Frontend/booking-page"
                                    className="menu-link"
                                >
                                    booking
                                </Link>
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
                            <li>
                                <Link
                                    to="/Rider-Frontend/signup"
                                    className="menu-link"
                                >
                                    signup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Rider-Frontend/signin"
                                    className="menu-link"
                                >
                                    signin
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="end-col">
                    <div className="mode-icon">
                        <input
                            className="mode-input"
                            type="checkbox"
                            id="mode_toggler"
                            onChange={toggle_theme_handler}
                            defaultChecked={rider_theme === "rider-dark-theme"}
                        />
                        <label
                            className="mode-label-btn"
                            htmlFor="mode_toggler"
                        >
                            {rider_theme === "rider-light-theme" ? (
                                <LuMoon />
                            ) : (
                                <LuSunMoon />
                            )}
                        </label>
                    </div>

                    <div
                        className="profile"
                        onClick={() =>
                            set_show_profile_menu(!show_profile_menu)
                        }
                        ref={profile_menu_btn_ref}
                    >
                        <img src={profile} alt="" />
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
                    <Link to="/Rider-Frontend/signup" className="nav-sign-btn">
                        sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
