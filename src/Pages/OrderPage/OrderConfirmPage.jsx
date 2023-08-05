import React, { useContext } from "react";
import { bookingContext } from "../../../context/BookingContext";
import { BsCheckCircle } from "react-icons/bs";

const OrderConfirmPage = () => {
    const { pinLock } = useContext(bookingContext);

    return (
        <div className="sec-container">
            <div className="order-confirm-container">
                <div className="content">
                    <span className="icon">
                        <BsCheckCircle />
                    </span>
                    <h2>You have successfully booked a cycle</h2>
                    <h4 className="">
                        Your Pin Lock: <span>{pinLock}</span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmPage;
