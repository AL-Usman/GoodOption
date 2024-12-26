import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";

const Policies = () => {
  return (
    <>
      <div className="d-flex gap-4 justify-content-evenly mb-4">
        <div className="d-flex flex-column p-2 position-relative">
          <TbTruckDelivery className="position-absolute top-50 start-0 translate-middle-y icon-size" />
          <span className="ps-4 fw-semibold">Free Shippng</span>
          <span className="ps-4 pol-desc">On all orders above ₹499</span>
        </div>
        <div className="d-flex flex-column p-2 position-relative">
          <RiSecurePaymentFill className="position-absolute top-50 start-0 translate-middle-y icon-size " />
          <span className="ps-4 fw-semibold">Secure Payments</span>
          <span className="ps-4 pol-desc">We ensure secure payments</span>
        </div>
        <div className="d-flex flex-column p-2 position-relative">
          <SiMoneygram className="position-absolute top-50 start-0 translate-middle-y icon-size" />
          <span className="ps-4 fw-semibold">100% Money Back</span>
          <span className="ps-4 pol-desc">30 days return policy</span>
        </div>
        <div className="d-flex flex-column p-2 position-relative">
          <MdOutlineSupportAgent className="position-absolute top-50 start-0 translate-middle-y icon-size" />
          <span className="ps-4 fw-semibold">Online Support</span>
          <span className="ps-4 pol-desc">24/7 support</span>
        </div>
      </div>
    </>
  );
};

export default Policies;
