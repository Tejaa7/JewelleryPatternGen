import React from 'react';

function GeneratedImages() {
  return (
    <div className="Generated-Images">
      <h3 className="text-left text-white"><b>Generated Images</b></h3>
      <div className="generated-image-container">
        <p id="noImageMessage" className="text-white">No images generated yet. Click "Generate" to see the results.</p>
        {/* Generated images will be displayed here dynamically */}
      </div>
    </div>
  );
}

export default GeneratedImages;
