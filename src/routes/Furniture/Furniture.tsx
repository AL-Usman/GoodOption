import React from "react";
import { useNavigate } from "react-router-dom";

function Furniture() {
  const navigate = useNavigate();
  const handelNavigation = () => {
    navigate("/furniture-shop");
  };
  return (
    <>
      <div className="position-relative">
        <div className="fur-head d-flex justify-content-center flex-column">
          <p className="fur-head-font">FURNITURE DESIGN</p>
          <button
            className="fur-head-btn border-0 rounded-pill"
            onClick={handelNavigation}
          >
            Show More
          </button>
        </div>
        <img className="img-fluid" src="images/furniture/5.webp" alt="" />
      </div>
      <div className="position-relative">
        <div className="fur-2nd-content d-flex justify-content-center flex-column">
          <h2 className="text-center" style={{ color: "#503d2f" }}>
            Modren Art
          </h2>
          <p className="text-secondary">
            This chair exudes modern elegance with its curved wooden frame,
            plush button-tufted upholstery, sleek angled legs, and blending
            comfort with timeless sophistication.
          </p>
          <button
            className="border-0 rounded-pill fur-2nd-btn"
            onClick={handelNavigation}
          >
            View All
          </button>
        </div>
        <img className="img-fluid" src="images/furniture/2.webp" alt="" />
      </div>
      <div className="position-relative">
        <div className="fur-3rd-content">
          <h2 style={{ color: "#503d2f" }}>Drop Chair</h2>
          <p className="fst-italic text-secondary">The White Seat Edition</p>
          <p className="text-secondary">
            Stunning pice of furniture that combines modren design with
            elegance. Its distinctive shape and bright white color make it a
            real eye catcher in room. The chair is not only stylish but also
            comforable and soft.
          </p>
          <button
            style={{ backgroundColor: "#d1c8bc" }}
            className="border-0 rounded-pill px-4 py-2 fur-3rd-btn"
            onClick={handelNavigation}
          >
            Learn More
          </button>
        </div>
        <img className="img-fluid" src="images/furniture/3.webp" alt="" />
      </div>
    </>
  );
}

export default Furniture;
