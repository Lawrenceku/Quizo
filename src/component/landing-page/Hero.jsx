import Navbar from "./NavBar";
import { Navigate, useNavigate } from "react-router-dom";


const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <section id="home" className="relative h-screen">
      <Navbar />
      <div className="absolute inset-0 overflow-hidden">
          <img
          className="w-full h-full absolute inset-0 object-cover"
          src="https://img.freepik.com/free-photo/top-view-minimal-medicinal-pills-assortment_23-2148892344.jpg?t=st=1736423069~exp=1736426669~hmac=e35deaeb3e52978f0bc9ce8c003bff22ea870a78369c0402bbb6231527b38dc7&w=1380"/>      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-green-950 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-3xl container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-5xl md:text-6xl font-bold text-white">
          Your one-stop quiz platform
        </p>
        <p className="text-lg mt-6 font-medium">
        Making learning and assessments fun, competitive, and interactive. Create, share, and track quizzes effortlessly with Quizo!
        </p>
        <p className="text-base xl:mx-40 mt-2">
Discover Quizo, the ultimate platform that turns learning and assessments into an engaging, competitive, and fun experience. Whether you're an educator, recruiter, or just looking for a way to challenge friends, Quizo offers the tools you need to create, share, and track quizzes with ease. Empower your journey with leaderboards, real-time performance insights, and endless possibilities for connection and growth.
        </p>
        <button onClick={()=>navigate('./signup')} className="bg-green-500 text-white px-6 py-2 mt-4 text-lg rounded-lg shadow-md hover:bg-green-600 transition duration-200">
            Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
