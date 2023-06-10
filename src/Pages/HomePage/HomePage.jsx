import React from "react";
import HeroComponent from "./../../Components/Non-Shared/HomePageCom/HeroCom/HeroComponent";
import BookingForm from "../../Components/Non-Shared/HomePageCom/BookingFormCom/BookingForm";
import HowWorks from "../../Components/Non-Shared/HomePageCom/HowItWorks/HowWorks";
import WhyChooseUs from "../../Components/Non-Shared/HomePageCom/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
    return (
        <>
            <HeroComponent />
            <BookingForm />
            <HowWorks />
            <WhyChooseUs />
        </>
    );
};

export default HomePage;
