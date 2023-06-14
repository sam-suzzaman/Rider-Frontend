import React from "react";
import "./SignupPage.css";
import formBG from "../../../assets/formBG.jpg";
import Logo from "../../../Components/Shared/Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { toast } from "react-toastify";

const SignupPage = () => {
    const notify = (e) => {
        e.preventDefault();
        toast("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log("clicked");
    };
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
                                <button
                                    className="submit-btn"
                                    type="submit"
                                    onClick={notify}
                                >
                                    sign up
                                </button>
                            </div>
                        </form>
                        <div className="form-footer">
                            <p className="info">
                                already have an account{" "}
                                <a href="#" className="link">
                                    Sign-in
                                </a>
                            </p>
                            <div className="form-divider">OR</div>
                            <div className="social-btn-container">
                                <button className="btn">
                                    <FcGoogle />{" "}
                                    <span className="text">
                                        sign up with google
                                    </span>
                                </button>
                                <button className="btn">
                                    <AiFillFacebook />{" "}
                                    <span className="text">
                                        sign up with facebook
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

export default SignupPage;
