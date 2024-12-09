import React from "react";
import "./Gallery.css";

const images1 = [
    "/public/images/modernimages/IMG_6297.JPG",
    "/public/images/modernimages/IMG_6293.JPG",
    "/public/images/modernimages/IMG_6294.JPG",
    "/public/images/modernimages/IMG_6295.jpg",
    "/public/images/modernimages/IMG_6297.jpg",
];

const Gallerytra = () => {
return (
    <div className="container gallery mt-5">
        <div className="cardContainer">
            {images1.map((src, index) => (
                <div className="blockImg" key={index}>
                    <img className="mainImg" src={src} alt={`Gallery item ${index + 1}`} />
                    <button className="use-button w-100 mt-2">USE</button>
                </div>
            ))}
        </div>
    </div>
);
};
export default Gallerytra;