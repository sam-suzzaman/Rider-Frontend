import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const bookingContext = React.createContext();

const BookingContextProviderWrapper = ({ children }) => {
    // user
    const [availableCycle, setAvailableCycle] = useState([]);
    const [bookingLocation, setBookingLocation] = useState("");
    const [cycleLoading, setCycleLoading] = useState(true);
    const [cycleError, setCycleError] = useState(false);
    const [pinLock, setPinLock] = useState("");

    const getAvailableBikes = async () => {
        console.log("called fetch cycle");
        setCycleLoading(true);

        const token = localStorage.getItem("access-token");
        if (token) {
            const config = {
                headers: { token: `Bearerr ${token}` },
            };
            const body = {
                position: bookingLocation,
            };

            try {
                const response = await axios.post(
                    "https://by-cycle-rider.vercel.app/cycle/search",
                    body,
                    config
                );
                console.log(response);
                setAvailableCycle(response.data?.cycles);
                setCycleLoading(false);
                setCycleError(false);
                // if (response.data.status) {
                //     setUser(response.data.result);
                //     setUserLoading(false);
                //     setUserError(false);
                // } else {
                //     setUser({ status: false });
                //     setUserLoading(false);
                //     return;
                // }
            } catch (error) {
                console.log(error);
                setCycleLoading(false);
                setCycleError(true);
                // const temp = { status: false };
                // setUserLoading(false);
                // setUserError(temp);
            }
        } else {
            setCycleLoading(false);
            setCycleError(false);
            toast.info("Login First");
            return;
        }
    };

    useEffect(() => {
        getAvailableBikes();
    }, [bookingLocation]);

    return (
        <bookingContext.Provider
            value={{
                availableCycle,
                bookingLocation,
                cycleLoading,
                cycleError,
                setBookingLocation,
                pinLock,
                setPinLock,
            }}
        >
            {children}
        </bookingContext.Provider>
    );
};

export { bookingContext, BookingContextProviderWrapper };
