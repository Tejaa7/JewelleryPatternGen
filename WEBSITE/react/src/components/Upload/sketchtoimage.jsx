import React, { useState } from 'react';

function UploadContainer({ onImageUpload }) {
  const [extraExamplesVisible, setExtraExamplesVisible] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); // State to store uploaded image
  const [imageUploaded, setImageUploaded] = useState(false); // State to indicate upload status

  const handleToggleExamples = () => {
    setExtraExamplesVisible(!extraExamplesVisible);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Convert the image file to Base64
      reader.onload = (e) => {
        const base64StringWithPrefix = e.target.result;
        const base64String = base64StringWithPrefix.split(',')[1]; // Strip the prefix
        setUploadedImage(base64StringWithPrefix); // Save the full Base64 string for preview
        setImageUploaded(true); // Set upload status to true
        onImageUpload(base64String); // Pass the stripped Base64 string to the parent
      };

      reader.readAsDataURL(file); // Read the file as a Base64 data URL
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
        style={{ cursor: 'pointer', border: '2px dashed #ccc', padding: '20px', borderRadius: '10px' }}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage} // Use the full Base64 string with prefix
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
      {/* ... (If you have example images, ensure they are handled similarly) */}
    </div>
  );
}

function YourGenerations({ generatedImages }) {
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
  const [uploadedImageBase64, setUploadedImageBase64] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateClick = async () => {
    if (!uploadedImageBase64) {
      alert('Please upload an image first.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://4ff0-35-196-102-93.ngrok-free.app/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: uploadedImageBase64 }), // Pass the Base64 string without prefix
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedImages((prevImages) => [
          ...prevImages,
          `data:image/jpeg;base64,${data.generated_image}`,
        ]);
      } else {
        alert('Failed to generate image: ' + data.message);
      }
    } catch (error) {
      alert('Error connecting to the server: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-4 sketch">
      <div className="col-lg-5 col-md-12" style={{ padding: '0 0 0 60px' }}>
        <UploadContainer onImageUpload={setUploadedImageBase64} />
      </div>
      <div className="col-lg-7 col-md-12" style={{ padding: '0 60px 0 0' }}>
        <div
          className="MuiCardContent-root bg-black text-white p-4"
          style={{ borderRadius: '20px' }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3>Sketch To Image</h3>
            <button className="btn btn-outline-light btn-sm">Feedback</button>
          </div>
          <p className="mt-2">
            Upload any sketch – be it a budding artwork, interior design concept, or a product idea – and watch as our AI swiftly renders it into a detailed, realistic image.
          </p>
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={handleGenerateClick} disabled={loading}>
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </div>
          <YourGenerations generatedImages={generatedImages} />
        </div>
      </div>
    </div>
  );
}

export default SketchToImageSection;
