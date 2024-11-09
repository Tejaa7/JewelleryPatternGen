// src/components/VideoSection.jsx
import React from "react";

export const VideoSection = () => {
    console.log("Rendering Videosection");
    return (
        <div className="fluid-container" style={{ backgroundColor: "#f1ebe5" }}>
            <div className="row d-flex align-items-center">
                <div className="col-lg-8 d-flex justify-content-center">
                    <video
                        className="img-fluid"
                        autoPlay
                        muted
                        loop
                        style={{ maxHeight: "100%", width: "100%", objectFit: "cover", height: "640px" }}
                    >
                        <source src="/videos/modernvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col-lg-4 text-right">
                    <h2 style={{ fontWeight: "bolder", fontSize: "40px" }}>Modern Gallery</h2>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
