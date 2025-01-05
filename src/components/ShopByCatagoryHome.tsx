import { Link } from "react-router-dom";

const ShopByCatagory = () => {
  return (
    <div className="container">
      <h2>Shop By Category</h2>

      <div className="d-flex justify-content-start gap-4 mb-5">
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "100px", height: "100px" }}
        >
          <Link to="/fashion">
            <img src="images/1.webp" width={80} height={85} />
          </Link>
        </div>
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "100px", height: "100px" }}
        >
          <Link to="/furniture">
            <img src="images/2.webp" width={80} height={85} />
          </Link>
        </div>
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "100px", height: "100px" }}
        >
          <Link to="/electronics">
            <img src="images/3.webp" width={80} height={85} />
          </Link>
        </div>
        <div
          className="d-flex justify-content-center align-items-center card mb-4 shadow rounded  border-0"
          style={{ width: "100px", height: "100px" }}
        >
          <Link to="/grocery">
            <img src="images/4.webp" width={80} height={85} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCatagory;
