import AboutSection from "../component/landing-page/About";
import Footer from "../component/landing-page/Footer";
import HeroSection from "../component/landing-page/Hero";
import Navbar from "../component/landing-page/NavBar";
import TeamSection from "../component/landing-page/Team";

const LandingPage = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        window.location.href = '/quiz';
    }
    return (
        <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <Footer />
        </div>
    );
    };

export default LandingPage;