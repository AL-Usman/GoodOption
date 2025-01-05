import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Policies from "../../components/Policies";
import Carousel from "../../components/Carousel";
import Collage from "../../components/Collage";
import ProductDisplay from "../../components/ProductDisplay";

const ShopProducts = () => {
  const location = useLocation();
  const shopName = location.state.shopName;
  const shopId = location.state.shopId;
  const brands = useSelector((store: any) => store.fashionSlice[0]);
  const fashionShop = useSelector((store: any) => store.fashionSlice[0]);
  const shopProducts = fashionShop.shops.find((s: any) => s.id === shopId);
  //console.log("shop products:", shopProducts.products);
  return (
    <>
      <Carousel banner={brands.fashionBanners} />
      <Policies />
      <Collage collage={fashionShop.fashionColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default ShopProducts;
