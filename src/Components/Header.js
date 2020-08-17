import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../w3.css";

const Header = () => {
  const { cartCount } = useSelector(state => state.userData);
  const pathname = window.location ? window.location.hash : "";

  return (
    <React.Fragment>
      <div className="w3-bar w3-padding-16 navigationMenu">
        <NavLink to="/">
          <span className="w3-bar-item linkbutton">Online Shopping</span>
        </NavLink>
        <div className="w3-right" style={{ padding: "8px" }}>
          <nav>
            <ul>
              <li
                className={
                  pathname.includes("clothing")
                    ? "linkHighlighted"
                    : "linkNormal"
                }
              >
                <Link to="/clothing">Clothing</Link>
              </li>
              <li
                className={
                  pathname.includes("products")
                    ? "linkHighlighted"
                    : "linkNormal"
                }
              >
                <Link to="/products">Products</Link>
              </li>
              <li
                className={
                  pathname.includes("cart") ? "linkHighlighted" : "linkNormal"
                }
              >
                <Link to="/cart">
                  <i className="fas fa-cart-plus" />
                  Cart<span>{cartCount}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
