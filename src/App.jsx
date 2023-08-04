import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Components
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/AuthenticationPages/SignupPage/SignupPage";
import SigninPage from "./Pages/AuthenticationPages/SigninPage/SigninPage";
import { ToastContainer } from "react-toastify";
import BookingPage from "./Pages/BookingPage/BookingPage";
import { BookingContextProviderWrapper } from "../context/BookingContext";

function App() {
    return (
        <>
            <BookingContextProviderWrapper>
                <Navbar />
                <Routes>
                    <Route path="/Rider-Frontend" element={<HomePage />} />
                    <Route
                        path="/Rider-Frontend/booking-page"
                        element={<BookingPage />}
                    />
                    <Route
                        path="/Rider-Frontend/signup"
                        element={<SignupPage />}
                    />
                    <Route
                        path="/Rider-Frontend/signin"
                        element={<SigninPage />}
                    />
                </Routes>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </BookingContextProviderWrapper>
        </>
    );
}

export default App;
