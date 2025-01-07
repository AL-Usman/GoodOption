import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state: any) => state.cartsSlice);

  return (
    <nav className="navbar navbar-expand-md navbar-white bg-light sticky-top">
      <div className="container-fluid d-flex">
        <Link to="/">
          <img src="logo/good-option.png" height={40} alt="brand-logo" />
        </Link>
        <Link to="/cart" className="pe-4 d-md-none nav-cart">
          <MdOutlineShoppingCart
            className="text-dark position-relative"
            size={25}
          />
          <span className="position-absolute translate-middle badge rounded-pill bg-danger">
            {cart.length}
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse " id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 gap-md-4">
            <li className="nav-item navbar-collapse">
              <Link to="/" className="nav-link px-2 ">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/fashion" className="nav-link px-2 ">
                Fashion
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/furniture" className="nav-link px-2 ">
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/electronics" className="nav-link px-2 ">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grocery" className="nav-link px-2 ">
                Grocery
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-md-2 gap-4">
            <form
              className="col-7 col-lg-auto mb-md-5 mb-lg-0 me-lg-3 mb-4 "
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-light border rounded-pill "
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <CiHeart className=" me-md-4 mt-md-2 mt-1 " size={25} />
            <div className="mob-cart">
              <Link to="/cart">
                <MdOutlineShoppingCart
                  className="text-dark position-relative mt-md-2 mt-1 "
                  size={25}
                />
                <span className="position-absolute mt-1 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </Link>
            </div>
            <Link to="/login">
              <CgProfile
                className="ms-md-4 mt-md-2 mt-1  text-dark"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
