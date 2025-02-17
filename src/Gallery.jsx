import React from "react";
import hooksImage from "../src/assets/images/hooks.jpg";
import es6Image from "../src/assets/images/es6.jpg";

const images = [hooksImage, es6Image];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;