import LandingPage from "../components/LandingPage";
import Testimonials from "../components/Testimonials";
import AboutMeTeaser from "../components/AboutMeTeaser";
import SelectedWorks from "../components/SelectedWorks";

// 📁 pages/HomePage.js
export default function HomePage() {
    return (
        <>
            <LandingPage />
            <AboutMeTeaser />
            <SelectedWorks /> 
            <Testimonials />
        </>
    );
}