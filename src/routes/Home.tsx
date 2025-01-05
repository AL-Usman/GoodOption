import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import ShopByCatagory from "../components/ShopByCatagoryHome";
import HomeCatBanner from "../components/HomeCatBanner";
import ShopByBrand from "../components/ShopByBrandHome";

const Home = () => {
  const data = useSelector((state: any) => state.fashionSlice[0]);
  console.log("hello", data.displayBrands);

  return (
    <>
      <div className="d-flex flex-column">
        <Carousel banner={data.fashionBanners} />
        <ShopByCatagory />
        <HomeCatBanner />
        <ShopByBrand />
        <img
          src="images/furniture/banner/1.webp"
          alt=""
          height={500}
          className="w-100"
        />
      </div>
    </>
  );
};

export default Home;
