import React from "react";
import "./OurClients.css";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import { LuQuote } from "react-icons/lu";
// slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Testimonail Data
const TestimonialData = [
    {
        _id: 1,
        author_name: "mitchel bech",
        author_info: "CEO, Example Company",
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit. Itaque, exercitationem. Vel error ut, excepturi optio neque veniam velit hic cum at recusandae fugiat quod assumenda debitis, iusto voluptatibus",
    },
    {
        _id: 2,
        author_name: "johnson lee",
        author_info: "Manager, XYZ Int.",
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit. Itaque, exercitationem. Vel error ut, excepturi optio neque veniam velit hic cum at recusandae fugiat quod assumenda debitis, iusto voluptatibus",
    },
    {
        _id: 3,
        author_name: "Witchlet Jenifa",
        author_info: "CEO, Example Company",
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit. Itaque, exercitationem. Vel error ut, excepturi optio neque veniam velit hic cum at recusandae fugiat quod assumenda debitis, iusto voluptatibus",
    },
    {
        _id: 4,
        author_name: "Thomas Alvin",
        author_info: "London",
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit. Itaque, exercitationem. Vel error ut, excepturi optio neque veniam velit hic cum at recusandae fugiat quod assumenda debitis, iusto voluptatibus",
    },
    {
        _id: 5,
        author_name: "Ben Edward",
        author_info: "CEO, ABC Company",
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit. Itaque, exercitationem. Vel error ut, excepturi optio neque veniam velit hic cum at recusandae fugiat quod assumenda debitis, iusto voluptatibus",
    },
];
const OurClients = () => {
    // Slider Settings
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="our-client-wrapper">
            <div className="sec-container">
                <SecTitle
                    title="our client's"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ut."
                />

                <div className="client-container">
                    <div className="client-col-start">
                        <Slider {...settings}>
                            {TestimonialData?.map((t) => {
                                return (
                                    <div className="col" key={t._id}>
                                        <div className="quote-icon">
                                            <LuQuote />
                                        </div>
                                        <div className="testimonial-container">
                                            <div className="quote">
                                                {t.comment}
                                            </div>
                                            <div className="author">
                                                <h3 className="name">
                                                    {t.author_name}
                                                </h3>
                                                <div className="info">
                                                    {t.author_info}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className="client-col-end">
                        <div className="col-1 info-card">
                            <h2 className="value">200+</h2>
                            <h5 className="text">bycycles</h5>
                        </div>
                        <div className="col-2 info-card">
                            <h2 className="value">500+</h2>
                            <h5 className="text">clients</h5>
                        </div>
                        <div className="col-3 info-card">
                            <h2 className="value">20+</h2>
                            <h5 className="text">pickup points</h5>
                        </div>
                        <div className="col-4 info-card">
                            <h2 className="value">400+</h2>
                            <h5 className="text">reviews</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurClients;
