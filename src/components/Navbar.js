import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md    bg-primary">
      <div className="container-xxl">
        <a className="navbar-brand display=block" href="#intro">
          <span className="text-secondary d-block  text-light">Bdkart</span>
          <i className="d-block text-white h6">
            <small>
              Explore<span> Plus</span>
            </small>
          </i>
        </a>

        <div className="collapse navbar-collapse   align-center" id="main-nav">
          <ul className="navbar-nav">
            <li></li>
            <li className="nav-item  me-5 ">
              <input
                type="text"
                className="search  p-1 ps-4"
                placeholder="Search for products and more"
                name="search"
              ></input>
              <button type="submit" class=" pe-4 p-1">
                <i class="fa fa-search"></i>
              </button>
            </li>

            <li className="nav-item  me-5 ">
              <input type="button" class=" p-1 px-5" value="Login"></input>
            </li>
            <li className="nav-item  me-5">
              <a className="nav-link" href="#reviews">
                Become a Seller
              </a>
            </li>
            <li className="nav-item  me-5">
              <a className="nav-link" href="#contact">
                More
              </a>
            </li>
            <li className="nav-item  me-5">
              <a className="nav-link" href="#pricing">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
