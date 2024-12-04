import React, { useState } from 'react';

function UploadContainer() {
  const [extraExamplesVisible, setExtraExamplesVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(2);

  const handleToggleExamples = () => {
    setExtraExamplesVisible(!extraExamplesVisible);
  };

  return (
    <div className="upload-container">
      <div className="upload-title">Upload your sketch</div>
      <div
        className="upload-area"
        onClick={() => document.getElementById('fileInput').click()}
      >
        <img src="upload.png" alt="Upload Icon" />
        <p>Click or drop image to upload</p>
        <input type="file" id="fileInput" accept="image/*" style={{ display: 'none' }} />
      </div>
      <div className="example-container">
        <div className="separator">Or try with one of ours</div>
        <div className="example-images">
          {['example1.png', 'example2.png', 'example3.png'].map((src, index) => (
            <img src={src} alt={`Example ${index + 1}`} key={index} />
          ))}
        </div>
        {extraExamplesVisible && (
          <div className="example-images">
            {['example4.png', 'example5.png', 'example6.png'].map((src, index) => (
              <img src={src} alt={`Example ${index + 4}`} key={index} />
            ))}
          </div>
        )}
        <div className="more-examples" onClick={handleToggleExamples}>
          <span>{extraExamplesVisible ? 'Less examples' : 'More examples'}</span>
        </div>
        <div className="slidecontainer">
          <div className="slider-label">Number of images</div>
          <div className="slider-wrapper">
            <input
              type="range"
              min="1"
              max="5"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="slider"
            />
            <div className="output-box">{sliderValue}</div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default UploadContainer;
