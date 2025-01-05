import { useSelector } from "react-redux";
import ShopDetails from "../../components/ShopDetails";
import Carousel from "../../components/Carousel";
import Brands from "../../components/Brands";

const Fashion: React.FC = () => {
  const fashionShop = useSelector((store: any) => store.fashionSlice[0]);
  const brands = useSelector((store: any) => store.fashionSlice[0]);
  // console.log("brands", brands[0].fashioBrands);
  const nav = "/fashion-shop-in";
  const type = "fashion";
  return (
    <>
      <Carousel banner={brands.fashionBanners} />
      <Brands brands={brands.fashioBrands} />
      <ShopDetails shops={fashionShop.shops} nav={nav} type={type} />
    </>
  );
};

export default Fashion;
