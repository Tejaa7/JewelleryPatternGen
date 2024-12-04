

import React from "react";
import ReactCompareImage from "react-compare-image";
import "./comparision.css";

const ImageSlider = () => {
  const images = [
    {
      before: "/images/home/input.png",
      after: "/images/home/output.png",
    },
  ];

  return (
    <div className="container-fluid comparision-component" style={{padding:'0'}}>
      <div className="mainWrapper-fluid" style={{padding:'0'}}>
        <div className="contentWrapper" style={{paddingTop:'40px',paddingBottom:'40px'}}>
          {images.map((image, index) => (
            <div key={index} className="sliderWrapper">
              <ReactCompareImage
                leftImage={image.before}
                rightImage={image.after}
                style={{width:'100%',height:'auto'}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
