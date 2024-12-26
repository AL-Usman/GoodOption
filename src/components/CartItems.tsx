import React from "react";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";

function CartItems() {
  const navigate = useNavigate();
  const cartIds = useSelector((store: any) => store.cartsSlice);
  const products = useSelector((store: any) => store.fashionProductSlice);
  const curItemPresent = products[0].filter((item: any) =>
    cartIds.includes(item.id)
  );

  console.log("current item", curItemPresent);
  const handleContinueShopping = () => {
    navigate(-1);
  };

  return (
    <div className=" col-6 ">
      <h3 className="mt-2">Shopping Cart</h3>
      <hr />
      <div className="card mb-2 border-0">
        <div className="card-body ">
          {curItemPresent.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-start ">
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
