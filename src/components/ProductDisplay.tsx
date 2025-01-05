import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";

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
interface Props {
  products: Products;
}
const ProductDisplay: React.FC<Props> = ({ products }) => {
  let navigate = useNavigate();

  //console.log(products);
  const dispatch = useDispatch();

  const handleAddToCart = (sId: number, pId: number) => {
    dispatch(cartAction.addToCart({ sId, pId }));
    //alert("shop id: " + sId + " product id: " + pId);
  };
  const handleContinueShopping = () => {
    navigate(-1);
  };
  return (
    <>
      <h3 className="text-center mb-4 text-decoration-underline">
        WE LOVE TRENDS
      </h3>
      <div className="container d-flex flex-wrap gap-5 mb-2 justify-content-evenly">
        {products.map((item: Products) => (
          <div
            key={item.id}
            className="card position-relative border-0"
            style={{ width: "12rem", height: "22rem" }}
          >
            {item.bestSelling && (
              <span className="badge bg-warning best-seller">Best seller</span>
            )}
            <img
              src={item.image}
              className="card-img-top card-img  "
              alt="..."
            />
            <div className="card-body mb-0">
              <h6 className="card-title text-center">{item.brandName}</h6>
              <p className="small text-wrap mb-0">{item.desc}</p>

              <span className="small">₹{item.price}</span>
              <span className=" text-size">
                M.R.P:
                <span className="text-decoration-line-through">{item.MRP}</span>
              </span>
              <span className="small">({item.discount}% off)</span>
              {item.available ? (
                <button
                  className="btn btn-primary cart-btn mt-0 rounded-pill "
                  onClick={() => handleAddToCart(item.shopId, item.id)}
                >
                  Add to cart
                </button>
              ) : (
                <div className=" pt-1 text-center text-danger">
                  Out of Stock
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className=" d-flex justify-content-center mb-2">
        <button
          className=" btn border border-2 rounded-pill "
          onClick={handleContinueShopping}
        >
          <IoIosArrowBack size={20} />
          Back
        </button>
      </div>
    </>
  );
};

export default ProductDisplay;
