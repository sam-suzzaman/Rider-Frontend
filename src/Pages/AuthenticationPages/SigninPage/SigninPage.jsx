import React from "react";
import "./Signin.css";
import formBG from "../../../assets/formBG.jpg";
import Logo from "../../../Components/Shared/Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const SigninPage = () => {
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
                            <h3 className="title">! signIn now !</h3>
                        </div>
                        <form action="">
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

                            <div className="btn-container">
                                <button className="submit-btn" type="submit">
                                    sign in
                                </button>
                            </div>
                        </form>
                        <div className="form-footer">
                            <p className="info">
                                don't have an account{" "}
                                <a href="#" className="link">
                                    Sign-up
                                </a>
                            </p>
                            <div className="form-divider">OR</div>
                            <div className="social-btn-container">
                                <button className="btn">
                                    <FcGoogle />{" "}
                                    <span className="text">
                                        sign in with google
                                    </span>
                                </button>
                                <button className="btn">
                                    <AiFillFacebook />{" "}
                                    <span className="text">
                                        sign in with facebook
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;
