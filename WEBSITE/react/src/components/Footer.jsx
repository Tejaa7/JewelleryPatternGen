import React, { useState } from 'react';

const Footer = () => {
  const [outputImage, setOutputImage] = useState('default-output.jpg');

  // Function to handle image preview
  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setOutputImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <footer>
      <div className="container-fluid mt-5" style={{ maxWidth: '100%', padding: 0 }}>
        <div className="row">
          
          {/* Left Side: Upload Section */}
          <div className="col-lg-4 col-md-6 col-12" style={{ padding: 0 }}>
            <div className="upload-box p-4 text-center" style={{ backgroundColor: 'black', height: '500px' }}>
              <h4 style={{ color: 'white' }}>Upload Your Sketch</h4>
              <div className="upload-area mt-4 mb-3">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="form-control"
                  onChange={previewImage}
                />
              </div>
              <div className="mt-3">
                <p style={{ textAlign: 'left', color: 'white' }}>Example sketches</p>
                <div id="exampleCarousel" className="carousel slide" data-bs-ride="carousel" style={{ height: '300px' }}>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/images/IMG_6300 2.jpg" className="d-block w-100 example-img" alt="Example 1" style={{ height: '300px' }} />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/IMG_6301 2.jpg" className="d-block w-100 example-img" alt="Example 2" style={{ height: '300px' }} />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/IMG_6303 2.jpg" className="d-block w-100 example-img" alt="Example 3" style={{ height: '300px' }} />
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <button className="carousel-control-prev" type="button" data-bs-target="#exampleCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#exampleCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Display Generated 2D Image */}
          <div className="col-lg-8 col-md-6 col-12" style={{ padding: 0 }}>
            <div className="output-box p-4 text-center" style={{ height: '500px' }}>
              <h4>Your 2D Image</h4>
              <div id="output-area" className="mt-4 mb-3">
                <img id="outputImage" src={outputImage} alt="Generated Image" className="img-fluid" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
