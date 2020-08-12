import React, { useState } from "react";
import Header from "./Header";
import Dungaree from "../assets/clothing/dungaree.jpeg";
import RedFrock from "../assets/clothing/girlsparty.jpeg";
import BlueJacket from "../assets/clothing/hoodie.jpeg";
import PinkJacket from "../assets/clothing/jacket.jpeg";
import StripedSaree from "../assets/clothing/StripedSaree.jpeg";
import YellowDress from "../assets/clothing/yellowDress.jpeg";
import FormalShirt from "../assets/clothing/FormalShirt.jpeg";

import "../App.css";
import { clothingProducts } from "../tools/mockData";

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
        price: clothingProducts[selectedProductName].price
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

  let clothingListItems = [];
  Object.entries(clothingProducts).forEach(items => {
    clothingListItems.push(items[1]);
  });

  const productImages = {
    Dungaree,
    RedFrock,
    BlueJacket,
    PinkJacket,
    StripedSaree,
    YellowDress,
    FormalShirt
  };

  let renderClothingList = clothingListItems.map((product, index) => {
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
      <div className="container">{renderClothingList}</div>
      {successMessage && (
        <div className="successMessageAlert">{successMessage}</div>
      )}
      {errorMessage && <div className="errorMessageAlert">{errorMessage}</div>}
    </div>
  );
};

export default Clothing;
