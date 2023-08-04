import React, { useContext, useState } from "react";
import "./BookingForm.css";

// Icons
import { TfiLocationPin } from "react-icons/tfi";
import {
    AiOutlineCalendar,
    AiOutlineClockCircle,
    AiOutlineSearch,
} from "react-icons/ai";

// flatpicker css link
// import "flatpickr/dist/themes/material_green.css";
// import Flatpickr from "react-flatpickr";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { bookingContext } from "../../../../../context/BookingContext";

const BookingForm = () => {
    const { setBookingLocation } = useContext(bookingContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleBookingForm = (data) => {
        setBookingLocation(data.bookingLocation);
        navigate("/Rider-Frontend/booking-page");
    };
    return (
        <>
            <section className="booking-form-wrapper">
                <div className="sec-container booking-form-container">
                    <SecTitle title="search & book" des="" clr="#fff" />

                    <form
                        className="form-container"
                        onSubmit={handleSubmit(handleBookingForm)}
                    >
                        {/* pickup location */}
                        <div className="input-group">
                            <h5 className="input-title">
                                select pickup point:
                            </h5>
                            <div className="input-field">
                                <label
                                    htmlFor="pickup_location"
                                    className="input-label"
                                >
                                    <TfiLocationPin />
                                </label>
                                <select
                                    className="select-input"
                                    {...register("bookingLocation", {
                                        required: {
                                            value: true,
                                            message: "Please select a location",
                                        },
                                        validate: {
                                            valueType: (value) => {
                                                return (
                                                    value !== "none" ||
                                                    "Please select a location"
                                                );
                                            },
                                        },
                                    })}
                                >
                                    <option selected disabled value="none">
                                        Pick a point
                                    </option>
                                    <option value="science">
                                        Science Building
                                    </option>
                                    <option value="bba">BBA Building</option>
                                    <option value="first">First gate</option>
                                    <option value="second">Second gate</option>
                                </select>
                            </div>
                            <p className="form-error-message">
                                {errors?.bookingLocation?.message}
                            </p>
                        </div>

                        {/* submit button */}
                        <div className="submit-btn-container">
                            <button className="submit-btn" type="submit">
                                <label
                                    htmlFor="search_icon"
                                    className="search_icon"
                                >
                                    <AiOutlineSearch />
                                </label>{" "}
                                search
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default BookingForm;
