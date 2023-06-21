import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopCom = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        // console.log(pathname);
        /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTopCom;
