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
import OrderPage from "./Pages/OrderPage/OrderPage";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderConfirmPage from "./Pages/OrderPage/OrderConfirmPage";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <BookingContextProviderWrapper>
                <QueryClientProvider client={queryClient}>
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
                        <Route
                            path="/Rider-Frontend/order/:id"
                            element={<OrderPage />}
                        />
                        <Route
                            path="/Rider-Frontend/order-confirm"
                            element={<OrderConfirmPage />}
                        />
                    </Routes>
                    <Footer />
                </QueryClientProvider>
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
