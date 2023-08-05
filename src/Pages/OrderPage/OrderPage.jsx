import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleHandler } from "../../utils/FetchHandlers";
import SecTitle from "../../Components/Shared/SecTitle/SecTitle";
import cyclePic from "../../assets/bikes/1.jpg";
import "./OrderPage.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { bookingContext } from "../../../context/BookingContext";

const OrderPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setPinLock } = useContext(bookingContext);
    const {
        isLoading,
        isError,
        data: cycle,
        error,
    } = useQuery("cycle", () =>
        getSingleHandler({
            url: "https://by-cycle-rider.vercel.app/cycle",
            id,
        })
    );
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const handleConfirmBook = async (data) => {
        const { bookingTime } = data;
        const time = bookingTime * 60 * 1000; //time in miliseconds
        const booking = {
            id: id,
            time: time,
        };
        // config
        const token = localStorage.getItem("access-token");
        const config = {
            headers: { token: `Bearer ${token}` },
        };

        try {
            const response = await axios.post(
                "https://by-cycle-rider.vercel.app/cycle/booking",
                booking,
                config
            );
            setPinLock(response.data.pinLock);
            reset();
            navigate("/Rider-Frontend/order-confirm");
        } catch (error) {
            console.log(error);
            toast.warn("Something wrong");
        }
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <section className="order-page-wrapper">
            {/* <SecTitle /> */}
            <SecTitle title="Booking Now" des="" clr="" />
            <div className="sec-container">
                <div className="cycle-container">
                    <div className="thumb">
                        <img src={cyclePic} alt="" />
                    </div>
                    <div className="content">
                        <h2 className="title">Title: {cycle.name}</h2>
                        <h6 className="price">Price: {cycle.price} Tk </h6>
                        <p className="info">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Provident, maiores eveniet! Libero laborum
                            voluptatum omnis maiores, illo error, fugiat ad
                            voluptate atque repudiandae quos, vitae iure rem
                            minima tempora nostrum.
                        </p>

                        <div className="time-form">
                            <form onSubmit={handleSubmit(handleConfirmBook)}>
                                <div className="input-group">
                                    <label
                                        htmlFor="bookingTime"
                                        className="input-label"
                                    >
                                        Booking Time (in Min)
                                    </label>
                                    <input
                                        type="number"
                                        className="rider-input"
                                        name="bookingTime"
                                        placeholder="Type here"
                                        {...register("bookingTime", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Booking Time is required",
                                            },
                                            validate: {
                                                minTime: (value) => {
                                                    let valueNum =
                                                        Number(value);
                                                    return valueNum < 1
                                                        ? "Time be atleast 10(min)"
                                                        : true;
                                                },
                                                maxTime: (value) => {
                                                    let valueNum =
                                                        Number(value);
                                                    return valueNum > 120
                                                        ? "Time be max 120(min)"
                                                        : true;
                                                },
                                            },
                                        })}
                                    />
                                    <label className="error-label">
                                        {errors.bookingTime?.message}
                                    </label>
                                </div>
                                <button type="submit" className="btn">
                                    confirm book
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
