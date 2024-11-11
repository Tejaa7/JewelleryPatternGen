import React from "react";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/Videosection"
import Navbar from "../../components/Navbar"



export const Traditional = () => {
    return (
        <section className="traditional-page">
            <Navbar />
            <VideoSection
                 videoSrc="/videos/traditionalvideo.mov"
                 heading="Traditional Gallery"/>
            <Gallery />
        </section>
    );
};

export default Traditional;
