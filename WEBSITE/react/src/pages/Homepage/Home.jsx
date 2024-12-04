import React from 'react';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
// import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";

import Brandheader from '../../components/Home/Brandheader';
import HeroSection from "../../components/Home/HeroSection"
import ProblemSolutionSection from "../../components/Home/Ps"
import Benefits from "../../components/Home/Benefits"
import FAQSection from '../../components/Faq/FaqSection';
import "../../components/Home/Benefits.css";
import "../../components/Home/Bhnvb.module.css";
import "../../components/Home/Faq.css";
import "../../components/Home/Ps.css";
import Footer from "../../components/Global/Footer";
import Comparision from "../../components/Home/Comparision";

export const Home = () => {
    return (
        <div>
            <Brandheader />
            <HeroSection />
            <ProblemSolutionSection 
                title="Luminous Elegance"
                description="Luminaire is your gateway to transforming jewelry sketches into stunning 2D designs. With cutting-edge AI technology, we turn your creative ideas into precise, vibrant visualizations. Whether you're a designer, jeweler, or enthusiast, Luminaire simplifies the design process, adding precision and elegance to your vision.

Let your imagination shine with Luminaire – where innovation meets artistry."
                videoSrc="/videos/radiancevideo.webm"
            />
                        <Comparision />
            <Benefits />
            <FAQSection />

            <Footer />
        </div>
    );
};

export default Home;
