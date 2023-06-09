import React from "react";
import "./HeroCom.css";
import { AiOutlineArrowRight } from "react-icons/ai";

// slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Slider Content
import slider1 from "../../../../assets/HomepageSlider/slider1.jpg";
import slider2 from "../../../../assets/HomepageSlider/slider2.jpg";
import slider3 from "../../../../assets/HomepageSlider/slider3.jpg";
const Slider_Content = [
    {
        _id: 1,
        title: "Are you ready",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis sunt voluptate perferendis provident ea dolore. Consequuntur, qui rerum? Libero!",
        btnName: "let's go",
        btnLink: "#",
        bg: slider1,
    },
    {
        _id: 2,
        title: "looking for a ride",
        subtitle:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit molestias voluptatum ex quam delectus aliquid perspiciatis eius ipsa minus praesentium.",
        btnName: "ride now",
        btnLink: "#",
        bg: slider2,
    },
    {
        _id: 3,
        title: "we are ready to go",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur hic assumenda explicabo officia? Aspernatur dolores eaque eos vitae voluptatem!",
        btnName: "book now",
        btnLink: "#",
        bg: slider3,
    },
];

const HeroComponent = () => {
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
        <>
            <section>
                <div className="sec-container hero-slider">
                    <Slider {...settings}>
                        {Slider_Content?.map((slider) => {
                            return (
                                <div key={slider._id}>
                                    <div
                                        className="hero-container"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${slider.bg})`,
                                        }}
                                    >
                                        <div className="hero-content">
                                            <h2 className="title">
                                                {slider.title}
                                            </h2>
                                            <p className="subtitle">
                                                {slider.subtitle}
                                            </p>
                                            <a
                                                href={slider.btnLink}
                                                className="rider-btn-1"
                                            >
                                                {slider.btnName}
                                                <span className="icon">
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default HeroComponent;
