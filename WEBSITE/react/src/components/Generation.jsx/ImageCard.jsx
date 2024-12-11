import React from "react";

const ImageCard = ({ image, onStar, onDelete, onShare, onView }) => {
  return (
    <div className="relative group">
      <img
        src={image.url}
        alt={image.alt || "Generated"}
        className="rounded shadow-lg w-full h-auto"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-300">
        <button onClick={() => onStar(image)} className="btn bg-yellow-500 p-2 rounded">⭐</button>
        <button onClick={() => onDelete(image)} className="btn bg-red-500 p-2 rounded">🗑️</button>
        <button onClick={() => onShare(image)} className="btn bg-blue-500 p-2 rounded">🔗</button>
        <button onClick={() => onView(image)} className="btn bg-green-500 p-2 rounded">👁️</button>
      </div>
    </div>
  );
};

export default ImageCard;
