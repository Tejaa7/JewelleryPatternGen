import React from "react";
import Gallery from "../../components/Galleries/Gallery";
import VideoSection from "../../components/Global/Videosection"
import Navbar from "../../components/Global/Navbar"
import './trad.css';
import Footer from "../../components/Global/Footer";
import Gallerytra from "../../components/Galleries/Gallerytra";

export const Traditional = () => {
    return (
        <section className="traditional-page">
            <Navbar />
            <VideoSection
                 videoSrc="/videos/traditionalvideo.mov"
                 heading="Traditional Gallery"/>
            <Gallerytra />
            <Footer />
        </section>
    );
};

export default Traditional;
