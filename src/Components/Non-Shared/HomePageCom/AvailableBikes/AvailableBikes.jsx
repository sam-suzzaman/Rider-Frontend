import React, { useState } from "react";
import "./AvailableBikes.css";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import AllAvailableBikesData from "../../../Shared/AllAvailableBikes/AllAvailableBikesData";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

const AvailableBikes = () => {
    let availableBikesData = AllAvailableBikesData.slice(0, 5);

    return (
        <section className="available-bike-wrapper">
            <div className="sec-container">
                <SecTitle
                    title="available bikes"
                    des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, natus!"
                />
                <div className="available-bike-container">
                    {availableBikesData?.map((bike) => {
                        return (
                            <div className="available-bike-col" key={bike._id}>
                                <div className="img-container">
                                    <img src={bike.photoURL} alt="bike" />
                                    <p className="rating">
                                        <span className="icon">
                                            <AiFillStar />
                                        </span>{" "}
                                        {bike.rating}
                                    </p>
                                </div>
                                <div className="content">
                                    <h4 className="title">{bike.title}</h4>
                                    <p className="info">
                                        Carry:{" "}
                                        <span className="fancy">
                                            {bike.carryPerson} Person
                                        </span>{" "}
                                    </p>
                                    <h5 className="price">
                                        Price:
                                        <span className="fancy">
                                            {bike.price}/{bike.unit}
                                        </span>
                                    </h5>
                                </div>
                                <div className="btn-container">
                                    <a href="" className="bike-btn">
                                        see details
                                        {/* <span className="icon">
                                            <AiOutlineShoppingCart />
                                        </span> */}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AvailableBikes;
