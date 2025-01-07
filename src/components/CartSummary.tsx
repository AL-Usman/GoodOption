import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
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
  const [qty, setQty] = useState<Record<number, number>>({});

  const handleQuantityChange = (id: number, value: number) => {
    setQty((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleRemoveItem = (pId: number) => {
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
        shop.products.map((item: Products) => {
          const quantity = qty[item.id] || 1; // Default to 1 if not set
          return (
            <div
              key={item.id}
              className="card border-0 mb-4 rounded w-100 w-md-150 "
            >
              <div className="d-flex justify-content-between align-items-center cart-mobile-view">
                {/* <div className="d-flex flex-row align-items-between"> */}
                <img
                  src={item.image}
                  className="img-fluid rounded-3 cart-img"
                  alt="Shopping item"
                />

                <div className="ms-1 ms-md-3 cart-item-desc">
                  <h5 className="fs-6">{item.brandName}</h5>
                  <p className="small ">{item.desc}</p>
                  {/* </div> */}
                </div>
                {/* <div className="d-flex flex-row gap-1 align-items-center"> */}
                <div>
                  <input
                    type="number"
                    className="border-0"
                    value={quantity}
                    min={1}
                    max={10}
                    // onChange={(e: any) => setQty(e.target.value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                </div>
                <div>
                  <h5 className="mb-0 ">₹{item.price * quantity}</h5>
                </div>
                <MdDeleteOutline
                  size={20}
                  style={{ width: "5vw" }}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            </div>
            // </div>
          );
        })
      )}
    </>
  );
};

export default CartSummary;
