import React from "react";
import "./HowWorks.css";
import { LuStepForward } from "react-icons/lu";
import SecTitle from "../../../Shared/SecTitle/SecTitle";

// How-IT-Works data
const HowItWorksData = [
    {
        _id: 1,
        title: "choose location",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore id expedita harum hic accusantium vitae blanditiis officia debitis mollitia, fugiat quisquam, eius, tempore aspernatur veniam corrupti pariatur ab est?",
        icon: <LuStepForward />,
    },
    {
        _id: 2,
        title: "select date and time",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore id expedita harum hic accusantium vitae blanditiis officia debitis mollitia, fugiat quisquam, eius, tempore aspernatur veniam corrupti pariatur ab est?",
        icon: <LuStepForward />,
    },
    {
        _id: 3,
        title: "confirm booking",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore id expedita harum hic accusantium vitae blanditiis officia debitis mollitia, fugiat quisquam, eius, tempore aspernatur veniam corrupti pariatur ab est?",
        icon: <LuStepForward />,
    },
];
const HowWorks = () => {
    return (
        <>
            <section className="works-sec-wrapper">
                <div className="sec-container">
                    <SecTitle
                        title="how it works"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore id expedita harum hic"
                        clr=""
                    />
                    <div className="works-sec-container">
                        {HowItWorksData?.map((work) => {
                            return (
                                <div className="works-col" key={work._id}>
                                    <div className="icon">{work.icon}</div>
                                    <h4 className="title">
                                        {" "}
                                        <span className="fancy">
                                            {work._id + 1}
                                        </span>
                                        <span className="fancy-2">&gt;</span>
                                        {work.title}
                                    </h4>
                                    <p className="info">{work.des}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWorks;
