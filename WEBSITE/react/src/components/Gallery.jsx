// src/components/Gallery.jsx
import React from "react";
import "./Gallery.css";

const images = [
    "/assets/modernimages/001_003.png",
    "/assets/images/IMG_6300.jpg",
    "/assets/images/IMG_6301.jpg",
    "/assets/modernimages/001_003.png",
    "/assets/modernimages/001_003.png",
    "/assets/modernimages/001_003.png",
];

const Gallery = () => {
    return (
        <div className="container gallery mt-5">
            <div className="cardContainer">
                {images.map((src, index) => (
                    <div className="blockImg" key={index}>
                        <img className="mainImg" src={src} alt={`Gallery item ${index + 1}`} />
                        <button className="use-button w-100 mt-2">USE</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
