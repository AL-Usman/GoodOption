import { Link } from "react-router-dom";

function HomeCatBanner() {
  return (
    <div className="container">
      <h2>Top Offers</h2>

      <div className="d-flex justify-content-center  gap-4 mb-2 mb-md-4">
        <div className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0 offer-card">
          <div className="col-12 col-md-12">
            <Link to="/fashion">
              <img src="images/home/1.webp" className="rounded-2 offer-card" />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0 offer-card">
          <div className="col-12 col-md-12">
            <Link to="/furniture">
              <img src="images/home/2.webp" className="rounded-2 offer-card" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCatBanner;
