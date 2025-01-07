import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import CartSummary from "./CartSummary";
interface CartId {
  sId: number;
  pId: number;
}
interface product {
  filter: any;
  id: number;
  brandName: String;
  desc: String;
  image: String;
  discount: number;
  MRP: number;
  price: number;
  rating: number;
  bestSelling: false;
  available: true;
  shopId: number;
}
interface shop {
  id: number;
  shopName: String;
  heading: String;
  address: String;
  timing: String;
  rating: number;
  products: product;
}

function CartItems() {
  const navigate = useNavigate();
  const cartIds = useSelector((store: any) => store.cartsSlice);
  const sproducts = useSelector((store: any) => store.fashionSlice);
  const shopProducts = sproducts[0].shops;

  const filteredShops = shopProducts
    .map((shop: shop) => {
      // Filter products based on cartIds
      const filteredProducts = shop.products.filter((product: product) =>
        cartIds.some((c: CartId) => c.sId === shop.id && c.pId === product.id)
      );

      // Return shop data only if it has matching products
      return filteredProducts.length > 0
        ? { ...shop, products: filteredProducts }
        : null;
    })
    .filter((shop: shop) => shop !== null);

  // console.log("products matched---->", filteredShops);

  const handleContinueShopping = () => {
    navigate(-1);
  };

  return (
    <div className=" col-12 col-md-7 ">
      <h3 className="mt-2">Shopping Cart</h3>
      <hr />
      <div className="card mb-2 border-0">
        <div className=" ">
          <CartSummary products={filteredShops} />
        </div>
      </div>
      <div className="d-flex justify-content-md-start justify-content-center ">
        <button
          className=" btn border border-2  rounded-pill "
          onClick={handleContinueShopping}
        >
          <IoIosArrowBack size={20} />
          Continue shopping
        </button>
      </div>
    </div>
  );
}

export default CartItems;
