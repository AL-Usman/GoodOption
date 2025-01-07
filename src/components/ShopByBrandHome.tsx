import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ShopByBrand: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    { image: "images/fashion/brands/2.webp", brand: "Adidas" },
    { image: "images/fashion/brands/3.webp", brand: "Puma" },
    { image: "images/fashion/brands/4.webp", brand: "Nike" },
    { image: "images/fashion/brands/6.webp", brand: "H&M" },
    { image: "images/fashion/brands/13.webp", brand: "Tommy Hilfiger" },
    { image: "images/furniture/brands/1.webp", brand: "IKEA" },
    { image: "images/furniture/brands/2.webp", brand: "Ashley Furniture" },
    { image: "images/furniture/brands/3.webp", brand: "Herman Miller" },
    { image: "images/furniture/brands/4.webp", brand: "La-Z-Boy" },
    { image: "images/furniture/brands/5.webp", brand: "West Elm" },
  ];
  const [images, setImages] = useState(data);
  // console.log("kkkk--->", images);
  const handleNext = () => {
    setImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
  };

  const handlePrev = () => {
    setImages((prevImages) => [
      prevImages[prevImages.length - 1],
      ...prevImages.slice(0, -1),
    ]);
  };
  const handleClick = (brand: string) => {
    navigate(`/shop-by-Brand`, { state: { brandName: brand } });

    // console.log("brand", brand);
  };
  return (
    <div className="container">
      <h2>Shop By Brand</h2>
      <div className="d-flex justify-content-center  align-items-center gap-md-4 mb-2 mb-md-4">
        <div className="" onClick={handlePrev}>
          <IoIosArrowBack />
        </div>
        <div className="row justify-content-md-start justify-content-center gap-md-4 gap-2">
          {images.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
              style={{ width: "100px", height: "100px" }}
            >
              {/* to="/shop-by-Brand" */}
              <div className="" onClick={() => handleClick(item.brand)}>
                <img src={item.image} width={50} height={55} />
              </div>
            </div>
          ))}
        </div>
        <div onClick={handleNext}>
          <IoChevronForwardOutline />
        </div>
        <div className="d-flex justify-content-between mt-3"></div>
      </div>
    </div>
  );
};

export default ShopByBrand;
