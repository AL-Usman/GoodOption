import React from "react";

const Home = () => {
  return (
    <div className="home-bg">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/fashion/bannerImg/1.webp"
              className="d-block w-100 h-25"
              alt="..."
            />
            <p>Picked every item with care, You must Try</p>
          </div>
          <div className="carousel-item">
            <img
              src="images/fashion/bannerImg/4.webp"
              className="d-block w-100 h-25"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/fashion/bannerImg/5.webp"
              className="d-block w-100 h-25"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
