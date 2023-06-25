import React, { useState } from "react";
import "./BookingForm.css";

// Icons
import { TfiLocationPin } from "react-icons/tfi";
import {
    AiOutlineCalendar,
    AiOutlineClockCircle,
    AiOutlineSearch,
} from "react-icons/ai";

// flatpicker css link
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
    const [selected_date, set_selected_date] = useState("");
    // console.log(selected_date);
    const navigate = useNavigate();

    const handleBookingForm = (e) => {
        e.preventDefault();
        navigate("/Rider-Frontend/booking-page");
    };
    return (
        <>
            <section className="booking-form-wrapper">
                <div className="sec-container booking-form-container">
                    <SecTitle title="search & book" des="" clr="#fff" />

                    <form
                        action=""
                        className="form-container"
                        onSubmit={handleBookingForm}
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
                                <select className="select-input">
                                    <option selected disabled>
                                        Pick a point
                                    </option>
                                    <option value="1">Science Building</option>
                                    <option value="2">First gate</option>
                                    <option value="3">second gate</option>
                                </select>
                            </div>
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
