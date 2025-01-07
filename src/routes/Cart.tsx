import CartPayment from "../components/CartPayment";
import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <section className="h-100 bg-cart">
      <div className=" p-md-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className=" card col-12 col-md-10 ">
            <div className="card-body ">
              <div className="row d-flex justify-content-between ">
                <CartItems />
                <CartPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
