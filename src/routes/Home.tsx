import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import ShopByCatagory from "../components/ShopByCatagoryHome";
import HomeCatBanner from "../components/HomeCatBanner";
import ShopByBrand from "../components/ShopByBrandHome";
import HotDealsProductDisplay from "../components/HotDealsProductDisplay";
import { Link } from "react-router-dom";

const Home = () => {
  const data = useSelector((state: any) => state.fashionSlice[0]);
  console.log("hello", data.shops[12].products);

  return (
    <>
      <div className="d-flex flex-column">
        <Carousel banner={data.homeBanners} />
        <ShopByCatagory />
        <HomeCatBanner />
        <ShopByBrand />
        <div className="container  mt-md-2 mb-md-4">
          <h2>Decor Your Interior</h2>
          <img
            src="images/furniture/banner/1.webp"
            alt=""
            className="w-100 h-50 mb-2 mb-md-4"
          />
        </div>
        <HotDealsProductDisplay products={data.shops[12].products} />
      </div>
    </>
  );
};

export default Home;
