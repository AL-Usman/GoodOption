import Policies from "../../components/Policies";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Collage from "../../components/Collage";
import ProductDisplay from "../../components/ProductDisplay";

const FurnitureProducts = () => {
  // const products = useSelector((state: any) => state.furnitureSlice[0]);
  //console.log("jijijij", products);
  const location = useLocation();
  const shopName = location.state.shopName;
  const shopId = location.state.shopId;
  const furnitureShop = useSelector((store: any) => store.furnitureSlice[0]);
  const shopProducts = furnitureShop.shops.find((s: any) => s.id === shopId);
  return (
    <>
      <div className="position-relative">
        <h1 className="display-shop-name">shopping at {shopName}</h1>
        <img src="images/furniture/banner/6.webp" className="w-100 mb-4" />
      </div>
      <Policies />
      <Collage collage={furnitureShop.furnitureColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default FurnitureProducts;
