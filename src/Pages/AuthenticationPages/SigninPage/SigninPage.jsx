import React from "react";
import "./Signin.css";
import formBG from "../../../assets/formBG.jpg";
import Logo from "../../../Components/Shared/Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SigninPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const loginHandler = async (data) => {
        const { email, password } = data;
        const user = { email, password };

        // posting
        try {
            const response = await axios.post(
                "https://by-cycle-rider.vercel.app/login",
                user
            );
            toast.success("Successfully Login");
            localStorage.setItem("access-token", response.data?.token);
            reset();
        } catch (error) {
            console.log(error);
            toast.warn("Something Wrong");
        }
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
                            <h3 className="title">! signIn now !</h3>
                        </div>
                        <form
                            onSubmit={handleSubmit(loginHandler)}
                            autoComplete="off"
                            noValidate
                        >
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
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message:
                                                "enter a valid email address",
                                        },
                                    })}
                                />
                                <label className="error-label">
                                    {errors.email?.message}
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
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "password is required",
                                        },
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/,
                                            message:
                                                "combination of number,uppercase letter and a special character",
                                        },
                                        maxLength: {
                                            value: 25,
                                            message:
                                                "password is too long (max 25chars)",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "password is too short (atleast 8chars)",
                                        },
                                    })}
                                />
                                <label className="error-label">
                                    {errors.password?.message}
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
                                <Link
                                    to="/Rider-Frontend/signup"
                                    className="link"
                                >
                                    Sign-up
                                </Link>
                            </p>
                            {/* <div className="form-divider">OR</div>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;
