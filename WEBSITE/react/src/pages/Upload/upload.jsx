import React from "react";
import VideoSection from "../../components/Global/Videosection";
import Navbar from "../../components/Global/Navbar";
import "./Upload.css";
<<<<<<< HEAD
import SketchToImage from "../../components/Upload/SketchtoImage";
import Footer from "../../components/Global/Footer";
import "../../components/Upload/upload.css";
import "../../components/Upload/sketchtoimage.css";



=======
// import Leftside from "../../components/Upload/Leftside";
import SketchToImage from "../../components/Upload/sketchtoimage";
import Footer from "../../components/Global/Footer";
import "../../components/Upload/upload.css";
import "../../components/Upload/sketchtoimage.css";
>>>>>>> ac4a61557cec25cf343813a809bae7af1be3f951
export const Upload = () => {
    return (
        <section className="upload-page" style={{backgroundColor:'#222222'}}>
            <Navbar />
            <VideoSection
                videoSrc="/videos/uploadvideo.mp4"
                heading="Paper to Perfection"
            />
            <SketchToImage />
<<<<<<< HEAD
            <Footer />
=======
>>>>>>> ac4a61557cec25cf343813a809bae7af1be3f951
        </section>
);
};

export default Upload;
