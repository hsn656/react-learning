import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid">
        <Link to={"/"} className="nav-link text-light h4">
          Logo
        </Link>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/counter"} className="nav-link">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/todo"} className="nav-link">
                To Do
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
