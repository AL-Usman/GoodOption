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
          <h1 className="fur-head-font">FURNITURE DESIGN</h1>
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
          <h3 className="text-center" style={{ color: "#503d2f" }}>
            Modren Art
          </h3>
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
        <div className="fur-3rd-content gap-0">
          <h3 style={{ color: "#503d2f" }}>Drop Chair</h3>
          <span className="fst-italic text-secondary">
            The White Seat Edition.
          </span>
          <br />
          <span className="text-secondary">
            Stunning pice of furniture that combines modren design with
            elegance. Its distinctive shape and bright white color make it a
            real eye catcher in room. The chair is not only stylish but also
            comforable and soft.
          </span>
          <br className="mb-3" />
          <button
            style={{ backgroundColor: "#d1c8bc" }}
            className="border-0 rounded-pill px-md-4 px-2 py-md-2 fur-3rd-btn"
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
