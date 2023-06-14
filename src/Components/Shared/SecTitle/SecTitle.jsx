import React from "react";
import "./SecTitle.css";

const SecTitle = ({ title, des, clr }) => {
    return (
        <>
            <h3 className="sec-title" style={{ color: `${clr && clr}` }}>
                {title}
            </h3>
            {des && <p className="sec-info">{des}</p>}
        </>
    );
};

export default SecTitle;
