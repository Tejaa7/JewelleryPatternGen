import React from 'react';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
// import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";
// <link>import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"</link>

import Brandheader from '../../components/Brandheader';
import Navbar from "../../components/Navbar"
import HeroSection from "../../components/HeroSection"
import ProblemSolutionSection from "../../components/Ps"
import Features from "../../components/Features"
import Benefits from "../../components/Benefits"
import FAQSection from '../../components/Faq/FaqSection';
import "../../components/Home/Benefits.css";
import "../../components/Home/Bhnvb.css";
import "../../components/Home/Faq.css";
import "../../components/Home/Ps.css";
import "../../components/Home/Video.css";

export const Home = () => {
    return (
        <div>
            <Brandheader />
            <Navbar /> 
            <HeroSection />
            <ProblemSolutionSection 
                title="Luminous Elegance"
                description="A canvas for your creativity, our platform transforms your jewelry sketches into stunning 2D images that bring your vision to life."
                videoSrc="/videos/radiancevideo.webm"
            />
            <ProblemSolutionSection 
                title="Streamlined Perfection"
                description="Our seamless process lets you upload your sketch and generate a beautifully refined 2D image."
                videoSrc="/videos/radiancevideo.webm"
                reverse
            />
            <Features />
            <Benefits />
            <FAQSection />
        </div>
    );
};

export default Home;
