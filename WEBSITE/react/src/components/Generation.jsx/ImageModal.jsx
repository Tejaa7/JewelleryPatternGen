
import React from "react";
import ReactCompareImage from "react-compare-image";

const ImageModal = ({ isOpen, onClose, original, generated }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-3/4 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 rounded-full p-2"
        >
          ❌
        </button>
        <div className="p-4">
          <ReactCompareImage leftImage={original} rightImage={generated} />
        </div>
        <div className="p-4 flex justify-around">
          <button className="btn bg-gray-200 p-2 rounded">Download As</button>
          <button className="btn bg-gray-200 p-2 rounded">Share</button>
          <button className="btn bg-gray-200 p-2 rounded">View Original</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
