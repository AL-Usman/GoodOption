import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";

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
const HotDealsProductDisplay: React.FC<Props> = ({ products }) => {
  //console.log(products);
  const dispatch = useDispatch();

  const handleAddToCart = (sId: number, pId: number) => {
    dispatch(cartAction.addToCart({ sId, pId }));
    //alert("shop id: " + sId + " product id: " + pId);
  };

  return (
    <>
      <h3 className="container mb-2 mb-md-4 ">Hot Deals</h3>
      <div className="container d-flex flex-wrap gap-md-5 gap-2 mb-2 justify-content-evenly">
        {products.map((item: Products) => (
          <div
            key={item.id}
            className="card position-relative border-0 product-card"
          >
            {item.bestSelling && (
              <span className="badge bg-warning best-seller">Best seller</span>
            )}
            <span className="small badge bg-success discount">
              {item.discount}%
            </span>
            <img
              src={item.image}
              className="card-img-top card-img  "
              alt="..."
            />
            <div className="card-body mb-0 product-card-body">
              <h6 className="card-title text-center">{item.brandName}</h6>
              <p className="small text-wrap mb-0">{item.desc}</p>

              <span className="small">₹{item.price}</span>
              <span className=" text-size">
                M.R.P:
                <span className="text-decoration-line-through">{item.MRP}</span>
              </span>
              {/* <span className="small">({item.discount}% off)</span> */}
              {item.available ? (
                <div>
                  <button
                    className="btn btn-primary add-to-cart-btn mt-1 rounded-pill "
                    onClick={() => handleAddToCart(item.shopId, item.id)}
                  >
                    Add to cart
                  </button>
                </div>
              ) : (
                <div className=" pt-3 text-center text-danger">
                  Out of Stock
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className=" d-flex justify-content-center mb-2"></div>
    </>
  );
};

export default HotDealsProductDisplay;
