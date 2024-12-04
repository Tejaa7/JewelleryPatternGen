// src/pages/ModernPage/ModernPage.jsx
import React from "react";
import Gallery from "../../components/Galleries/Gallery";
import VideoSection from "../../components/Global/Videosection"
import Navbar from "../../components/Global/Navbar"
import './modern.css'
import Footer from "../../components/Global/Footer";




const ModernPage = () => {
    return (
        <section className="modern-page">
            <Navbar />
            <VideoSection 
                className='mt-5'
                videoSrc="videos/modernvideo.mp4"
                heading="Modern Gallery"/>
            <Gallery />
            <Footer />
        </section>
    );
};

export default ModernPage;
