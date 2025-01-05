import { useSelector } from "react-redux";
import ShopDetails from "../../components/ShopDetails";
import Carousel from "../../components/Carousel";
import Brands from "../../components/Brands";

const FurnitureShops = () => {
  const furnitureShops = useSelector((store: any) => store.furnitureSlice[0]);
  const nav = "/furniture-shop-in";
  const type = "furniture";
  return (
    <>
      <Carousel banner={furnitureShops.furitureBanners} />
      <Brands brands={furnitureShops.furnitureBrands} />

      <ShopDetails shops={furnitureShops.shops} nav={nav} type={type} />
    </>
  );
};

export default FurnitureShops;
