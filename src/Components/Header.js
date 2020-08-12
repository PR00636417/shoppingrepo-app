import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="overlay" />
        <nav>
          <h2>Online Shopping</h2>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/clothing">Clothing</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li className="cart">
              <Link to="/cart">
                <i className="fas fa-cart-plus" />
                Cart<span>
                  {localStorage.getItem("cartCount")
                    ? localStorage.getItem("cartCount")
                    : 0}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
