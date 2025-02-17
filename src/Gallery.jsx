import hooksImage from "../src/assets/images/hooks.jpg";


const images = [hooksImage];


console.log(images)

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
