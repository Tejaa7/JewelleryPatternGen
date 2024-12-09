import React, { useState } from 'react';


function UploadContainer() {
  const [extraExamplesVisible, setExtraExamplesVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(2);
  const [uploadedImage, setUploadedImage] = useState(null); // State to store uploaded image
  const [imageUploaded, setImageUploaded] = useState(false); // State to indicate upload status

  const handleToggleExamples = () => {
    setExtraExamplesVisible(!extraExamplesVisible);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setImageUploaded(true); // Set upload status to true
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="upload-container text-white p-4"
      style={{ backgroundColor: '#02080c', borderRadius: '20px' }}
    >
      <div className="upload-title h3 text-center mb-3">Upload Your Sketch</div>

      {/* Upload Area */}
      <div
        className="upload-area text-center mb-3" 
        onClick={() => document.getElementById('fileInput').click()}
        style={{ cursor: 'pointer', border: '2px dashed #ccc', borderRadius: '10px' }}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded Preview"
            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover', marginBottom: '10px' }}
          />
        ) : (
          <>
            <img src="upload.png" alt="Upload Icon" className="mb-2" />
            <p>Click or drop an image to upload</p>
          </>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>

      {/* Feedback Message */}
      {imageUploaded && (
        <div className="text-success text-center mb-3">Image uploaded successfully!</div>
      )}

      {/* Example Container */}
      <div className="example-container">
        <div className="separator text-center mb-3">Or try with one of ours</div>
        <div className="example-images d-flex justify-content-center mb-3">
          {['example1.png', 'example2.png', 'example3.png'].map((src, index) => (
            <img
              src={src}
              alt={`Example ${index + 1}`}
              key={index}
              className="img-thumbnail mx-1"
              style={{ maxWidth: '80px', cursor: 'pointer' }}
              onClick={() => {
                setUploadedImage(src);
                setImageUploaded(true); // Indicate successful "upload"
              }}
            />
          ))}
        </div>
        {extraExamplesVisible && (
          <div className="example-images d-flex justify-content-center mb-3">
            {['example4.png', 'example5.png', 'example6.png'].map((src, index) => (
              <img
                src={src}
                alt={`Example ${index + 4}`}
                key={index}
                className="img-thumbnail mx-1"
                style={{ maxWidth: '80px', cursor: 'pointer' }}
                onClick={() => {
                  setUploadedImage(src);
                  setImageUploaded(true); // Indicate successful "upload"
                }}
              />
            ))}
          </div>
        )}
        <div className="more-examples text-center mb-3" onClick={handleToggleExamples}>
          <span className="btn btn-link">{extraExamplesVisible ? 'Less Examples' : 'More Examples'}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="slidecontainer">
        <div className="slider-label text-center">Number of Images</div>
        <div className="slider-wrapper d-flex justify-content-center align-items-center">
          <input
            type="range"
            min="1"
            max="5"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="slider mx-2"
          />
          <div className="output-box">{sliderValue}</div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary">Generate</button>
      </div>
    </div>
  );
}
function YourGenerations() {
    const [generatedImages, setGeneratedImages] = useState([
      'generated1.jpg',
    ]);
  
    return (
      <div className="generations-section mt-5">
        <h3 className="text-white">Your Generations</h3>
        <div className="d-flex flex-wrap justify-content-start mt-3">
          {generatedImages.length > 0 ? (
            generatedImages.map((src, index) => (
              <div key={index} className="p-2">
                <img
                  src={src}
                  alt={`Generated ${index + 1}`}
                  className="img-thumbnail"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
            ))
          ) : (
            <p className="text-white">No images generated yet. Start creating!</p>
          )}
        </div>
      </div>
    );
  }

function SketchToImageSection() {
  const [showPopup, setShowPopup] = useState(false);

const handleFeedbackClick = () => {
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
};

  return (
    <div className="row mt-4 sketch">
      {/* Integrated Upload Section */}
      <div className="col-lg-5 col-md-12" style={{ padding: '0 0 0 60px' }}>
        <UploadContainer />
      </div>

      {/* Sketch to Image Section */}
      <div className="col-lg-7 col-md-12" style={{ padding: '0 60px 0 0' }}>
        <div
          className="MuiCardContent-root bg-black text-white p-4"
          style={{ borderRadius: '20px' }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3>Sketch To Image</h3>
            <button className="btn btn-outline-light btn-sm" onClick={handleFeedbackClick}>
  Feedback
</button>
          </div>
          <p className="mt-2">
            Upload any sketch – be it a budding artwork, interior design concept, or a product idea
            – and watch as our AI swiftly renders it into a detailed, realistic image.
          </p>

          {/* Examples Section */}
          <div className="examples mt-4">
            <h5 className="mb-3">Examples</h5>
            <div className="d-flex justify-content-between">
              <img src="example1.jpg" alt="Example 1" className="img-thumbnail" />
              <img src="example2.jpg" alt="Example 2" className="img-thumbnail" />
              <img src="example3.jpg" alt="Example 3" className="img-thumbnail" />
            </div>
          </div>

          {/* Tutorials Section */}
          <div className="tutorials mt-4">
            <h5>Tutorials</h5>
            <div className="embed-responsive embed-responsive-16by9 mt-2">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/tutorial-video-id"
                title="Tutorial"
                allowFullScreen
              ></iframe>
            </div>
          </div>
                {/* "Your Generations" Section */}
      <div className="col-12">
        <YourGenerations />
      </div>
        </div>
      </div>
      {showPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h4>Your feedback helps us improve</h4>
      <div className="emoji-options">
        <span>😃</span>
        <span>😊</span>
        <span>😐</span>
        <span>😞</span>
        <span>😡</span>
      </div>
      <textarea
        placeholder="Tell us more about your experience."
        className="feedback-textarea"
      ></textarea>
      <button className="btn btn-primary submit-btn">Submit</button>
      <button className="close-btn" onClick={handleClosePopup}>
        ×
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default SketchToImageSection;
