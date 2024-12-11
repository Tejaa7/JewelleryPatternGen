// src/components/Gallery.jsx
import React from "react";
import "./Gallery.css";

    const images = [
        "/public/images/modernimages/001_003.png",
        "/public/images/modernimages/001_007.png",
        "/public/images/modernimages/001_010.png",
        "/public/images/modernimages/IMG_6300 2.jpg",
        "/public/images/modernimages/IMG_6305 2.jpg",
    ];

    const Gallery = () => {
        return (
            <div className="container gallery mt-5">
                <div className="cardContainer">
                    {images.map((src, index) => (
                        <div className="blockImg" key={index}>
                            <img className="mainImg" src={src} alt={`Gallery item ${index + 1}`} />
                            {/* <a href="/src/pages/Upload/upload.jsx">
                                <button className="use-button w-100 mt-2">USE</button>
                            </a> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    
export default Gallery;

