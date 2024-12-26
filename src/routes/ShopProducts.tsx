import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TitleContent from "../components/TitleContent";
import Policies from "../components/Policies";
import { cartAction } from "../store/cartSlice";

const ShopProducts = () => {
  const location = useLocation();
  const shopName = location.state.shopName;
  const shopId = location.state.shopId;

  //const product = useSelector((store: any) => store.fashionProductSlice);
  const fashionShop = useSelector((store: any) => store.fashionShopsSlice);
  const cartSlice = useSelector((store: any) => store.cartsSlice);
  const shopProducts = fashionShop[0].shops.find((s: any) => s.id === shopId);
  console.log("shop products:", shopProducts.products);

  const dispatch = useDispatch();

  const handleAddToCart = (id: number) => {
    dispatch(cartAction.addToCart(id));
  };
  return (
    <>
      <TitleContent title={shopName} />
      <Policies />
      <div className="container d-flex flex-wrap gap-5 mb-2 justify-content-evenly">
        {shopProducts.products.map((item: any) => (
          <div
            key={item.id}
            className="card border border-0"
            style={{ width: "12rem", height: "22rem" }}
          >
            <img
              src={item.image}
              className="card-img-top card-img "
              alt="..."
            />
            <div className="card-body ">
              <h6 className="card-title text-center">{item.brandName}</h6>
              <p className="small text-wrap mb-0">{item.desc}</p>

              <span className="small">₹{item.price}</span>
              <span className=" text-size">
                M.R.P:
                <span className="text-decoration-line-through">{item.MRP}</span>
              </span>
              <span className="small">({item.discount}% off)</span>

              <button
                className="btn btn-primary cart-btn mt-0 "
                onClick={() => handleAddToCart(item.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopProducts;
