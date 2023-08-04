import React from "react";
import "./SignupPage.css";
import formBG from "../../../assets/formBG.jpg";
import Logo from "../../../Components/Shared/Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const registerHandler = async (data) => {
        const { username, email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            const user = { username, email, password };

            // posting
            try {
                const response = await axios.post(
                    "https://by-cycle-rider.vercel.app/user/signup",
                    user
                );
                console.log(response);
                toast.success("Successfully Registered");
                navigate("/Rider-Frontend/signin");
            } catch (error) {
                console.log(error);
                toast.warn("Something Wrong");
            }
        } else {
            toast.warn("Both password not matched!!!");
            return;
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
                            <h3 className="title">! signUp now !</h3>
                        </div>
                        <form
                            onSubmit={handleSubmit(registerHandler)}
                            autoComplete="off"
                            noValidate
                        >
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
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Username is required",
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Username must be (3)chars at least",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Username can be (20) chars max",
                                        },
                                    })}
                                />
                                <label className="error-label">
                                    {errors.username?.message}
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
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message:
                                                "confirm password is required",
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
                                    {errors.confirmPassword?.message}
                                </label>
                            </div>
                            <div className="btn-container">
                                <button className="submit-btn" type="submit">
                                    sign up
                                </button>
                            </div>
                        </form>
                        <div className="form-footer">
                            <p className="info">
                                already have an account{" "}
                                <Link
                                    to="/Rider-Frontend/signin"
                                    className="link"
                                >
                                    Sign-in
                                </Link>
                            </p>
                            {/* <div className="form-divider">OR</div>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
