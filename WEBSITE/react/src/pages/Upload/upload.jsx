import React from "react";
import VideoSection from "../../components/Global/Videosection";
import Navbar from "../../components/Global/Navbar";
import "./Upload.css";
import SketchToImage from "../../components/Upload/SketchtoImage";
import Footer from "../../components/Global/Footer";
import "../../components/Upload/upload.css";
import "../../components/Upload/sketchtoimage.css";



export const Upload = () => {
    return (
        <section className="upload-page" style={{backgroundColor:'#222222'}}>
            <Navbar />
            <VideoSection
                videoSrc="/videos/uploadvideo.mp4"
                heading="Paper to Perfection"
            />
            <SketchToImage />
            <Footer />
        </section>
    );
};

export default Upload;
