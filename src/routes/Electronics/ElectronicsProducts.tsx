import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Policies from "../../components/Policies";
import Collage from "../../components/Collage";
import ProductDisplay from "../../components/ProductDisplay";

const ElectronicsProducts = () => {
  const location = useLocation();
  const shopId = location.state.shopId;
  const shopName = location.state.shopName;
  const eleProducts = useSelector((store: any) => store.fashionSlice[0]);
  console.log("hello", eleProducts);
  const shopProducts = eleProducts.shops.find((s: any) => s.id === shopId);
  console.log("shop products:", shopProducts.products);

  return (
    <>
      <div className="position-relative">
        <h1 className="display-shop-name text-dark">Shopping at {shopName}</h1>
        <img src="images/electronics/banner/5.webp" className="w-100 mb-4" />
      </div>
      <Policies />
      <Collage collage={eleProducts.electronicsColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default ElectronicsProducts;
