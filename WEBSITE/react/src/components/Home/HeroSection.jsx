import React from 'react';
import "../../components/Home/Video.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <video autoPlay muted loop>
                <source src="/videos/Swarovski vid.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content text-center text-white">
                <h2 className="display-4" style={{color:'#191919'}}>From Imagination to Creation</h2>
                <a href="/upload" className="btn btn-light btn-lg mt-4 upbtn">Upload Your Sketch</a>
            </div>
        </section>
    );
};

export default HeroSection;
