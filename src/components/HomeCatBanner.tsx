import React from "react";

function HomeCatBanner() {
  return (
    <div className="container">
      <div className="d-flex justify-content-start gap-4 mb-5">
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "50%", height: "20rem" }}
        >
          <div className="col-12 col-md-12">
            <img
              src="images/home/1.webp"
              className="rounded-2"
              style={{ width: "100% ", height: "20rem" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "50% ", height: "20rem" }}
        >
          <div className="col-12 col-md-12">
            <img
              src="images/home/2.webp"
              className="rounded-2"
              style={{ width: "100% ", height: "20rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCatBanner;
