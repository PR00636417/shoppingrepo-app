import React, { useState } from "react";
import Header from "./Header";
import DrumKeyboard from "../assets/babyproducts/drumkeyboard.jpeg";
import Himalaya from "../assets/babyproducts/himalaya.jpeg";
import JungleBook from "../assets/babyproducts/junglebook.jpeg";
import LaughingBoy from "../assets/babyproducts/laughingboy.jpeg";
import MamaEarth from "../assets/babyproducts/mamaearth.jpeg";
import Pikachu from "../assets/babyproducts/pikachu.jpeg";
import Teddy from "../assets/babyproducts/teddy.jpeg";
import "../App.css";
import { babyProducts } from "../tools/mockData";

const Clothing = () => {
  const [cartNumber, setCartNumbers] = useState(
    localStorage.getItem("cartCount") ? localStorage.getItem("cartCount") : 0
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let cartProducts = localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [];

  const addToCart = selectedProductName => {
    let cartProductsLength = [];
    cartProductsLength = cartProducts.filter(
      list => list.productName === selectedProductName
    );
    if (cartProductsLength.length === 0) {
      cartProducts.push({
        productName: selectedProductName,
        count: 1,
        price: babyProducts[selectedProductName].price
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      setCartNumbers(parseInt(cartNumber) + 1);
      localStorage.setItem("cartCount", parseInt(cartNumber) + 1);
      setErrorMessage("");
      setSuccessMessage("Item is added into cart successfully");
    } else {
      setSuccessMessage("");
      setErrorMessage("Item already exists in cart");
    }
  };

  let productListItems = [];
  Object.entries(babyProducts).forEach(items => {
    productListItems.push(items[1]);
  });

  const productImages = {
    DrumKeyboard,
    Himalaya,
    JungleBook,
    LaughingBoy,
    MamaEarth,
    Pikachu,
    Teddy
  };

  let renderProductList = productListItems.map((product, index) => {
    return (
      <div className="image" key={index}>
        <img
          src={productImages[product.name]}
          alt="productImage"
          width="100px"
          height="150px"
        />
        <div>{product.name}</div>
        <div>
          <i className="fas fa-rupee-sign" />
          {product.price}
        </div>
        <div onClick={() => addToCart(product.name)} className="addToCart">
          Add to cart
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="container">{renderProductList}</div>
      {successMessage && (
        <div className="successMessageAlert">{successMessage}</div>
      )}
      {errorMessage && <div className="errorMessageAlert">{errorMessage}</div>}
    </div>
  );
};

export default Clothing;
