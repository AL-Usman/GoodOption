import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Policies from "../../components/Policies";
import Collage from "../../components/Collage";
import ProductDisplay from "../../components/ProductDisplay";

const ShopProducts = () => {
  const location = useLocation();
  const shopId = location.state.shopId;
  const shopName = location.state.shopName;
  const fashionShop = useSelector((store: any) => store.fashionSlice[0]);
  const shopProducts = fashionShop.shops.find((s: any) => s.id === shopId);
  //console.log("shop products:", shopProducts.products);
  return (
    <>
      <div className="position-relative">
        <h1 className="display-shop-name text-dark position-absolute bottom-50 start-50 translate-middle">
          Shopping at {shopName}
        </h1>
        <img src="images/fashion/banner/5.webp" className="w-100 mb-4" />
      </div>
      <Policies />
      <Collage collage={fashionShop.fashionColleage} />
      <ProductDisplay products={shopProducts.products} />
    </>
  );
};

export default ShopProducts;
