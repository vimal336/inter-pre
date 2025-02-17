import { useState } from "react";
import hooksImage from "../src/assets/images/hooks.jpg";
import es6Image from "../src/assets/images/es6.jpg";
import routesImage from "../src/assets/images/routes.jpg";
import reduxImage from "../src/assets/images/redux.jpg";
import hoistingImage from "../src/assets/images/hoisting.jpg";
import uncontrolledImage from "../src/assets/images/uncontrolled.jpg";
import controlledImage from "../src/assets/images/controlled.jpg";
import PromiseImage from "../src/assets/images/promise.jpg";

const images = [es6Image, PromiseImage, uncontrolledImage,controlledImage, hoistingImage, hooksImage, reduxImage, routesImage];

const ImageGallery = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setFullScreenImage(src)}
          />
        </div>
      ))}

      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 bg-red-500 text-black px-4 py-2 rounded"
            onClick={() => setFullScreenImage(null)}
          >
            X
          </button>
          <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
