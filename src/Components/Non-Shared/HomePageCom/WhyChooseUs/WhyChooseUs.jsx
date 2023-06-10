import React from "react";
import "./WhyChooseUs.css";
import SecTitle from "../../../Shared/SecTitle/SecTitle";
import queryPic from "../../../../assets/query.png";
import { BiCheckShield } from "react-icons/bi";

// Data
const whyChooseData = [
    {
        _id: 1,
        title: "easy booking",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nobis quo ratione cupiditate facilis rem temporibus sapiente esse, dolor",
        icon: <BiCheckShield />,
    },
    {
        _id: 2,
        title: "fast service",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nobis quo ratione cupiditate facilis rem temporibus sapiente esse",
        icon: <BiCheckShield />,
    },
    {
        _id: 3,
        title: "pickup point",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nobis quo ratione cupiditate facilis rem",
        icon: <BiCheckShield />,
    },
    {
        _id: 4,
        title: "with comfort",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nobis quo ratione ",
        icon: <BiCheckShield />,
    },
    {
        _id: 5,
        title: "low in cost",
        des: "temporibus sapiente esse, dolor itaque= vitae cumque sunt quam. Placeat ducimus maiores soluta nam.",
        icon: <BiCheckShield />,
    },
    {
        _id: 6,
        title: "full satisfaction",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nobisducimus maiores soluta nam.",
        icon: <BiCheckShield />,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="">
            <div className="sec-container">
                <SecTitle
                    title="why choose us"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nihil!Lorem ipsum dolor sit."
                    clr=""
                />
                <div className="choose-container">
                    {/* <!-- single Item --> */}
                    {whyChooseData?.map((choose) => {
                        return (
                            <div className="choose-card" key={choose._id}>
                                <div className="card-header">
                                    <div className="icon">{choose.icon}</div>
                                    <h5>{choose.title}</h5>
                                </div>
                                <p className="card-info">{choose.des}</p>
                            </div>
                        );
                    })}

                    {/* <!-- single Item - 7 --> */}
                    <div className="choose-card">
                        <div className="card-img-container">
                            <img src={queryPic} alt="query" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
