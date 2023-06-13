import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/AuthenticationPages/SignupPage/SignupPage";

function App() {
    return (
        <>
            <Navbar />
            <HomePage />
            <SignupPage />
            <Footer />
        </>
    );
}

export default App;
