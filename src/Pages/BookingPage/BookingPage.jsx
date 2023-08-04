import React, { useContext } from "react";
import { bookingContext } from "../../../context/BookingContext";
import SecTitle from "../../Components/Shared/SecTitle/SecTitle";
import "./BookingPage.css";
import cyclePic from "../../assets/bikes/1.jpg";

const BookingPage = () => {
    const {
        availableCycle,
        bookingLocation,
        cycleLoading,
        cycleError,
        setBookingLocation,
    } = useContext(bookingContext);

    if (cycleLoading) {
        return <h3>Loading ...</h3>;
    }
    return (
        <section className="booking-page-wrapper">
            <SecTitle
                title="Available Cycles"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nihil!Lorem ipsum dolor sit."
                clr=""
            />
            <div className=" sec-container">
                <div className="available-cycle-content">
                    <h4 className="search-text">
                        Search Result for
                        <span className="fancy">"{bookingLocation}"</span>
                        location
                        <span className="fancy">
                            ({availableCycle?.length})
                        </span>
                    </h4>
                    <div className="cycle-card-row">
                        {availableCycle?.map((cycle) => {
                            return (
                                <div className="cycle-card" key={cycle._id}>
                                    <div className="thumb">
                                        <img src={cyclePic} alt="" />
                                    </div>
                                    <h2 className="title">
                                        {cycle.name}
                                        <span className="price">
                                            {cycle.price} TK
                                        </span>
                                    </h2>

                                    <p className="des">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Iure, officia!
                                    </p>
                                    <button className="book-btn">
                                        book now
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
