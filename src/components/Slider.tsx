import React, { useState } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState([
    "images/fashion/banner/1.webp",
    "images/fashion/banner/2.webp",
    "images/fashion/banner/3.webp",
    "images/fashion/banner/4.webp",
    "images/fashion/banner/1.webp",
    "images/fashion/banner/2.webp",
    "images/fashion/banner/3.webp",
    "images/fashion/banner/4.webp",
    "images/fashion/banner/1.webp",
    "images/fashion/banner/2.webp",
    "images/fashion/banner/3.webp",
    "images/fashion/banner/4.webp",
    "images/fashion/banner/1.webp",
    "images/fashion/banner/2.webp",
    "images/fashion/banner/3.webp",
    "images/fashion/banner/4.webp",
  ]);

  const handleNext = () => {
    setImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
  };

  const handlePrev = () => {
    setImages((prevImages) => [
      prevImages[prevImages.length - 1],
      ...prevImages.slice(0, -1),
    ]);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center justify-content-md-start gap-4">
        {images.slice(0, 9).map((image) => (
          <div
            className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
            style={{ width: "100px", height: "100px" }}
          >
            <img src={image} width={50} height={55} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-primary" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
