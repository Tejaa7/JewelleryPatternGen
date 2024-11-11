import React from "react";
import VideoSection from "../../components/Videosection"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./Upload.css"



export const Upload = () => {
    return (
        <section className="traditional-page">
            <Navbar />
            <VideoSection
                 videoSrc="/videos/uploadvideo.mp4"
                 heading="Paper to Perfection"/>
            <Footer />
        </section>
    );
};

export default Upload;
