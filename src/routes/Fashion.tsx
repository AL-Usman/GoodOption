import TitleContent from "../components/TitleContent";
import CardContent from "../components/CardContent";
import { useSelector } from "react-redux";

const Fashion: React.FC = () => {
  const fashionShop = useSelector((store: any) => store.fashionShopsSlice);

  // console.log("hello", fashionShop);
  // console.log("lele", fashionShop[0].shops);
  const nav = "/fashion-shop-in";
  return (
    <div className="container ">
      {/* <TitleContent title={fashionShop[1]} /> */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner mb-4 border-0 rounded ">
          <div className="carousel-item active">
            <img
              src="images/fashion/bannerImg/1.webp"
              className="d-block w-100 "
              alt="..."
              height={450}
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/fashion/bannerImg/4.webp"
              className="d-block w-100 "
              height={450}
              alt=""
            />
          </div>
          <div className="carousel-item ">
            <img
              src="images/fashion/bannerImg/5.webp"
              className="d-block w-100 "
              alt="..."
              height={450}
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
      <div className="d-flex flex-wrap  justify-content-around mx-2 mb-3">
        <CardContent shops={fashionShop[0].shops} nav={nav} />
      </div>
    </div>
  );
};

export default Fashion;
