import { Routes, Route } from "react-router-dom";

// Components
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/AuthenticationPages/SignupPage/SignupPage";
import SigninPage from "./Pages/AuthenticationPages/SigninPage/SigninPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Rider-Frontend" element={<HomePage />} />
                <Route path="/Rider-Frontend/signup" element={<SignupPage />} />
                <Route path="/Rider-Frontend/signin" element={<SigninPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
