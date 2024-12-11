
import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onStar, onDelete, onShare, onView }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          image={image}
          onStar={onStar}
          onDelete={onDelete}
          onShare={onShare}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
