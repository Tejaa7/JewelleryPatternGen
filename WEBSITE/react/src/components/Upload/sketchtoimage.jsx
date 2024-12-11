import React, { useState } from "react";

function UploadContainer({ onImageUpload }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Convert the image file to Base64
      reader.onload = (e) => {
        const base64String = e.target.result;

        // Extract Base64 content and ensure it's valid
        if (base64String.includes("base64,")) {
          const extractedBase64 = base64String.split("base64,")[1]; // Strip the data URL prefix
          setUploadedImage(base64String); // Save full data URL for preview
          setImageUploaded(true); // Set upload status to true
          onImageUpload(extractedBase64); // Pass the Base64 string to the parent
        } else {
          alert("Invalid Base64 format. Please upload a valid image.");
        }
      };

      reader.readAsDataURL(file); // Read the file as a Base64 data URL
    }
  };

  return (
    <div
      className="upload-container-fluid text-white p-4"
      style={{ backgroundColor: "black" }}
    >
      <h3 className="text-center mb-3">Upload Your Sketch</h3>

      <div
        className="upload-area text-center mb-3"
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          cursor: "pointer",
          border: "2px dashed #ccc",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded Preview"
            style={{
              maxWidth: "100%",
              // maxHeight: "200px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
        ) : (
          <p>Click to upload your sketch</p>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {imageUploaded && (
        <div className="text-success text-center">Image uploaded successfully!</div>
      )}
    </div>
  );
}

function YourGenerations({ generatedImages }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="generations-section mt-5">
      <h3 className="text-white">Your Generations</h3>
      <div className="d-flex flex-wrap justify-content-start mt-3">
        {generatedImages.length > 0 ? (
          generatedImages.map((src, index) => (
            <div
              key={index}
              className="p-2"
              onClick={() => setSelectedImage(src)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={src}
                alt={`Generated ${index + 1}`}
                className="img-thumbnail"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          ))
        ) : (
          <p className="text-white">No images generated yet. Start creating!</p>
        )}
      </div>

      {selectedImage && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Large Preview"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
}

function SketchToImageSection() {
  const [uploadedImageBase64, setUploadedImageBase64] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateClick = async () => {
    if (!uploadedImageBase64) {
        alert("Please upload an image first.");
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(
            "https://8038-34-125-89-16.ngrok-free.app/generate",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: uploadedImageBase64 }), // Send Base64 content
            }
        );

        const data = await response.json();
        if (data.success) {
            const generatedImage = `data:image/jpeg;base64,${data.generated_image}`;
            setGeneratedImages((prevImages) => [...prevImages, generatedImage]);

            // Save the generated image to the backend
            await fetch("http://localhost:3000/api/save-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include cookies for JWT
                body: JSON.stringify({
                    base64Image: generatedImage,
                }),
            });

            alert("Image generated and saved successfully!");
        } else {
            alert("Failed to generate image: " + data.message);
        }
    } catch (error) {
        alert("Error connecting to the server: " + error.message);
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="row mt-4 sketch">
      <div className="col-lg-4 col-md-12" style={{ padding: "0" }}>
        <UploadContainer onImageUpload={setUploadedImageBase64} />
      </div>
      <div className="col-lg-8 col-md-12" style={{ padding: "0" }}>
        <div
          className="MuiCardContent-root-fluid bg-black text-white p-4"
          
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3>Sketch To Image</h3>
            <button className="btn btn-outline-light btn-sm">Feedback</button>
          </div>
          <p className="mt-2">
            Upload any sketch – be it a budding artwork, interior design concept, or a product idea
            – and watch as our AI swiftly renders it into a detailed, realistic image.
          </p>
          <div className="text-center mt-3">
            <button
              className="btn btn-primary"
              onClick={handleGenerateClick}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
          <YourGenerations generatedImages={generatedImages} />
        </div>
      </div>
    </div>
  );
}

export default SketchToImageSection;
