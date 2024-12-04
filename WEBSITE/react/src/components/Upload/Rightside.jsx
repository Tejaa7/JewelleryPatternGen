import React, { useState } from 'react';

function Instructions() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className="Instructions" style={{padding:'0',margin:'0'}}>
      <button className="btn btn-outline-light btn-sm feedback-btn">Feedback</button>
      <h3 className="text-left"><b>Sketch To Image</b></h3>
      <p className="content-left">
        Have a creative jewelry idea sketched out? We bring your vision to life! ...
      </p>
      <button className="btn btn-outline-light btn-sm" onClick={toggleContent}>
        Examples and Tutorials {contentVisible ? '▲' : '▼'}
      </button>
      {contentVisible && (
        <div className="examples-tutorials mt-4">
          <div className="example-images mt-3">
            {['example7.png', 'example8.png', 'example9.png'].map((src, index) => (
              <img src={src} alt={`Example ${index + 7}`} key={index} />
            ))}
          </div>
          <div className="tutorial-video mt-3">
            <h5 className="text-light">Watch the Tutorial</h5>
            <video controls width="100%">
              <source src="tutorial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instructions;
