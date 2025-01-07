import { useSelector } from "react-redux";
import ShopByBrandProductDisplay from "./ShopByBrandProductDisplay";
import { useLocation } from "react-router-dom";
interface Products {
  map: any;
  id: number;
  brandName: string;
  desc: String;
  image: any;
  discount: number;
  MRP: number;
  price: number;
  shopId: number;
  bestSelling: boolean;
  available: boolean;
}
const ShopFromBrand = () => {
  const location = useLocation();
  const brand = location.state.brandName;
  //console.log(brand);
  const product = useSelector((state: any) => state.fashionSlice[0]);
  const shopProducts = product.shops.map((item: any) => {
    return item.products.filter((data: Products) => data.brandName === brand);
  });

  return (
    <>
      <ShopByBrandProductDisplay shopProducts={shopProducts} />
    </>
  );
};

export default ShopFromBrand;
