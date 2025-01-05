import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Policies from "../../components/Policies";
import Collage from "../../components/Collage";
import ProductDisplay from "../../components/ProductDisplay";

const ElectronicsProducts = () => {
  const location = useLocation();
  const shopName = location.state.shopName;
  const shopId = location.state.shopId;
  const eleProducts = useSelector((store: any) => store.fashionSlice[0]);
  console.log("hello", eleProducts);
  const shopProducts = eleProducts.shops.find((s: any) => s.id === shopId);
  console.log("shop products:", shopProducts.products);

  return (
    <>
      <Policies />
      <Collage collage={eleProducts.electronicsColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default ElectronicsProducts;
