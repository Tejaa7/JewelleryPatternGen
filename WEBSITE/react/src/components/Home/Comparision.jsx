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
    <div className="heading">
      {/* <p
        style={{
          fontSize: "45px",
          padding: "10px 0 20px 10px",
          display: "flex",
          justifyContent: "center",
          color: "black",
        }}
      >
        Imagination to Reality
      </p> */}
      <div className="container-fluid comparison-component" style={{ padding: "0" }}>
        <div className="row align-items-center" style={{ height: "100%",marginLeft:'82px',marginRight:'82px',paddingBottom:'10px'}}>
          {/* Left Text Section */}
          <div className="col-md-6 text-section" style={{ padding: "20px" }}>
            <h2 style={{fontSize:'45px',color:'white',padding:'0 0 5px 0'}}>Experience the Transformation</h2>
            <p style={{color:'white'}}>
            At Luminaire, creativity meets craftsmanship. Watch as your ideas take shape, transforming from simple sketches into dazzling jewelry masterpieces, crafted to perfection.
            </p>
          </div>
          {/* Right Image Section */}
          <div className="col-md-6 image-section" style={{ padding: "20px" }}>
            <div className="sliderWrapper">
              {images.map((image, index) => (
                <ReactCompareImage
                  key={index}
                  leftImage={image.before}
                  rightImage={image.after}
                  style={{ width: "100%" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;