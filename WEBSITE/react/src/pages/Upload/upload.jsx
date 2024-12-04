import React from "react";
import VideoSection from "../../components/Global/Videosection";
import Navbar from "../../components/Global/Navbar";
import "./Upload.css";
import Leftside from "../../components/Upload/Leftside";
import Rightside from "../../components/Upload/Rightside";
// import Generated from "../../components/Upload/Generated";
import Footer from "../../components/Global/Footer";
import "../../components/Upload/upload.css";

export const Upload = () => {
    return (
        <section className="upload-page">
            <Navbar />
            <VideoSection
                videoSrc="/videos/uploadvideo.mp4"
                heading="Paper to Perfection"
            />
            <div className="upload-content container">
                {/* Flexbox or Bootstrap grid */}
                <div className="row">
                    <div className="col-md-6 col-sm-12 left-section">
                        <Leftside />
                    </div>
                    <div className="col-md-6 col-sm-12 right-section">
                        <Rightside />
                    </div>
                </div>
            </div>
            {/* <Generated /> */}
            <Footer />
        </section>
    );
};

export default Upload;
