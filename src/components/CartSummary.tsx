import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";
interface Products {
  map: any;
  id: number;
  brandName: string;
  desc: String;
  image: any;
  price: number;
  shopId: number;
}
interface Props {
  products: Products;
}
interface shop {
  id: number;
  shopName: String;
  heading: String;
  address: String;
  timing: String;
  rating: number;
  products: Products;
}

const CartSummary: React.FC<Props> = ({ products }) => {
  //console.log("product--->", products);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const handleRemoveItem = (sId: number, pId: number) => {
    if (
      window.confirm("Are you sure you want to remove this item from cart?")
    ) {
      dispatch(cartAction.removeFromCart(pId));
      alert("Item removed from cart");
    }
  };
  return (
    <>
      {products.map((shop: shop) =>
        shop.products.map((item: Products) => (
          <div key={item.id} className="card border-0 mb-4 rounded w-150 ">
            <div className="d-flex justify-content-between ">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img
                    src={item.image}
                    className="img-fluid rounded-3"
                    alt="Shopping item"
                    style={{ width: 65 }}
                  />
                </div>
                <div className="ms-3">
                  <h5>{item.brandName}</h5>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
              <div className="d-flex flex-row gap-1 align-items-center">
                <div>
                  <input
                    type="number"
                    className="border-0"
                    style={{ width: 35 }}
                    value={qty}
                    min={1}
                    max={10}
                    onChange={(e: any) => setQty(e.target.value)}
                  />
                </div>
                <div style={{ width: 100 }}>
                  <h5 className="mb-0">₹{item.price * qty}</h5>
                </div>
                <MdDeleteOutline
                  size={20}
                  style={{ width: 20 }}
                  onClick={() => handleRemoveItem(item.shopId, item.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CartSummary;
