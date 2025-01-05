import Carousel from "../../components/Carousel";
import { useSelector } from "react-redux";
import Brands from "../../components/Brands";
import ShopDetails from "../../components/ShopDetails";

const Electronics = () => {
  const electronics = useSelector((state: any) => state.electronicsSlice[0]);
  console.log("products", electronics);
  const nav = "/electronics-shop-in";
  const type = "electronics";
  return (
    <>
      <Carousel banner={electronics.electronicsBanners} />
      <Brands brands={electronics.electronicsBrands} />
      <ShopDetails shops={electronics.shops} nav={nav} type={type} />
    </>
  );
};

export default Electronics;
