import React from "react";
import Policies from "../../components/Policies";
import ProductDisplay from "../../components/ProductDisplay";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Collage from "../../components/Collage";
import SingleImageCarousel from "../../components/Slider";
import MultiImageSingleMoveCarousel from "../../components/Slider";

const FurnitureProducts = () => {
  const products = useSelector((state: any) => state.furnitureSlice[0]);
  //console.log("jijijij", products);
  const location = useLocation();
  const shopName = location.state.shopName;
  const shopId = location.state.shopId;
  const furnitureShop = useSelector((store: any) => store.furnitureSlice[0]);
  const shopProducts = furnitureShop.shops.find((s: any) => s.id === shopId);
  return (
    <>
      {/* <Carousel banner={furnitureShop.furitureBanners} /> */}
      <Policies />
      <Collage collage={furnitureShop.furnitureColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default FurnitureProducts;
