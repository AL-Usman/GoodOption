import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state: any) => state.cartsSlice);
  return (
    <header className="py-1 text-bg-white position-sticky top-0 bg-white z-3">
      <div className="header ">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between justify-content-md-start mx-4">
          <Link
            to="/"
            className="  d-flex align-items-center mb-2 mb-lg-0 me-lg-5 text-dark text-decoration-none  "
          >
            <img src="logo/good-option.png" height={40} alt="brand-logo" />
          </Link>
          <ul className="nav col-12 col-md-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-dark">
                Home
              </Link>
            </li>
            <li>
              <Link to="/fashion" className="nav-link px-2 text-dark">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/furniture" className="nav-link px-2 text-dark">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="nav-link px-2 text-dark">
                Electronics
              </Link>
            </li>

            <li>
              <div className="position-relative">
                <Link to="/grocery" className="nav-link px-2 text-dark">
                  Grocery
                </Link>
              </div>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-md-5 mb-lg-0 me-lg-3 mb-4 "
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-light border rounded-pill "
              placeholder="Search..."
              aria-label="Search"
              size={35}
            />
          </form>
          <div className="d-flex gap-2 d-md-flex justify-content-md-end">
            <CiHeart className=" me-md-4" size={25} />
            <Link to="/cart">
              <div>
                <MdOutlineShoppingCart
                  className="text-dark position-relative"
                  size={25}
                />
                <span className="position-absolute top-1 start-99 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <CgProfile className="ms-md-4 ext-dark" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
