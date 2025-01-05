import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="py-4 container-fluid ">
        <div className=" d-flex  ">
          <div className="col-6 col-md-6 pe-2 pe-md-5">
            <p>Want to be part of our Good option?</p>
            <p>
              Be the first to receive innovative new product launches,
              perspectives and technologies, direct to your inbox. To introduce
              you to our world, we are offering 10% off your first order.
            </p>

            <form className="d-flex flex-column col-6 flex-sm-row  gap-2">
              <input
                id="newsletter1"
                type="email"
                className="form-control w-100"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </form>
            <ul className="nav pt-3 d-flex justify-content-start ">
              <li className="">
                <FaFacebookSquare className="sm" />
              </li>
              <li className="ms-3">
                <FaSquareXTwitter className="sm" />
              </li>
              <li className="ms-3">
                <FaInstagramSquare className="sm" />
              </li>
              <li className="ms-3">
                <FaYoutubeSquare className="sm" />
              </li>
              <li className="ms-3">
                <FaLinkedin className="sm" />
              </li>
              <li className="ms-3"></li>
            </ul>
          </div>
          <div className=" col-6 col-md-6 mb-3 d-flex flex-wrap ps-2 ps-md-5 ">
            <div className="px-2 col-6 col-md-4 mb-3">
              <h6>Company</h6>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className=" px-2 col-6 col-md-4 mb-3">
              <h6>Customer care</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-2 col-6 col-md-4 mb-3">
              <h6>Terms & Policies</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0   ">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-row justify-content-between  ">
          <div className="col-6 col-md-6 pe-5">
            <p>© 2024 Good Option, Inc. All rights reserved.</p>
          </div>
          <div className="ps-5 col-6 col-md-6 mb-3 d-flex flex-wrap  gap-3">
            <img
              src="images/indianFlag.png"
              alt="indian flag"
              className="flag"
            />
            <p>INDIA (INR ₹)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
