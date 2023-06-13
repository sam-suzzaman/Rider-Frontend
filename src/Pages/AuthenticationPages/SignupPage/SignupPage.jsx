import React from "react";
import "./SignupPage.css";
import formBG from "../../../assets/formBG.jpg";
import Logo from "../../../Components/Shared/Logo/Logo";

const SignupPage = () => {
    return (
        <section>
            <div
                className="sign-wrapper"
                style={{ backgroundImage: `url(${formBG})` }}
            >
                <div className="sec-container">
                    <div className="sign-form-container">
                        <div className="header-row">
                            <Logo />
                            <h3 className="title">! signUp now !</h3>
                        </div>
                        <form action="">
                            {/* Username */}
                            <div className="input-group">
                                <label
                                    htmlFor="username"
                                    className="input-label"
                                >
                                    username
                                </label>
                                <input
                                    type="text"
                                    className="rider-input"
                                    name="username"
                                    placeholder="Type here"
                                />
                                <label className="error-label">
                                    something went wrong
                                </label>
                            </div>
                            {/* email */}
                            <div className="input-group">
                                <label htmlFor="email" className="input-label">
                                    your emil
                                </label>
                                <input
                                    type="email"
                                    className="rider-input"
                                    name="email"
                                    placeholder="Type here"
                                />
                                <label className="error-label">
                                    something went wrong
                                </label>
                            </div>
                            {/* password */}
                            <div className="input-group">
                                <label
                                    htmlFor="password"
                                    className="input-label"
                                >
                                    password
                                </label>
                                <input
                                    type="password"
                                    className="rider-input"
                                    name="password"
                                    placeholder="Type here"
                                />
                                <label className="error-label">
                                    something went wrong
                                </label>
                            </div>
                            {/* confirm-password */}
                            <div className="input-group">
                                <label
                                    htmlFor="Cpassword"
                                    className="input-label"
                                >
                                    confirm password
                                </label>
                                <input
                                    type="password"
                                    className="rider-input"
                                    name="Cpassword"
                                    placeholder="Type here"
                                />
                                <label className="error-label">
                                    something went wrong
                                </label>
                            </div>
                            <div className="btn-container">
                                <button className="submit-btn" type="submit">
                                    sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
