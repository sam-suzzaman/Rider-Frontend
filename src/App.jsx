import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/AuthenticationPages/SignupPage/SignupPage";
import SigninPage from "./Pages/AuthenticationPages/SigninPage/SigninPage";

function App() {
    return (
        <>
            <Navbar />
            <HomePage />
            <SignupPage />
            <SigninPage />
            <Footer />
        </>
    );
}

export default App;
