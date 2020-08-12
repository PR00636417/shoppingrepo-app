import React, { useState, Fragment } from "react";
import Header from "./Header";

//clothing
import Dungaree from "../assets/clothing/dungaree.jpeg";
import RedFrock from "../assets/clothing/girlsparty.jpeg";
import BlueJacket from "../assets/clothing/hoodie.jpeg";
import PinkJacket from "../assets/clothing/jacket.jpeg";
import StripedSaree from "../assets/clothing/StripedSaree.jpeg";
import YellowDress from "../assets/clothing/yellowDress.jpeg";
import FormalShirt from "../assets/clothing/FormalShirt.jpeg";

//babyproducts
import DrumKeyboard from "../assets/babyproducts/drumkeyboard.jpeg";
import Himalaya from "../assets/babyproducts/himalaya.jpeg";
import JungleBook from "../assets/babyproducts/junglebook.jpeg";
import LaughingBoy from "../assets/babyproducts/laughingboy.jpeg";
import MamaEarth from "../assets/babyproducts/mamaearth.jpeg";
import Pikachu from "../assets/babyproducts/pikachu.jpeg";
import Teddy from "../assets/babyproducts/teddy.jpeg";

const Cart = () => {
  const [cartData, setCartData] = useState(
    localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts"))
      : []
  );

  let orginalValue = 0;
  let sumValue = 0;

  const getTotalCount = () => {
    if (cartData.length > 0 && orginalValue === 0) {
      cartData.forEach(productList => {
        sumValue = orginalValue + productList.count * productList.price;
        orginalValue = sumValue;
      });
    }
    return sumValue;
  };
  const addItemsToCart = selectedProductName => {
    let existingCartData = [...cartData];
    existingCartData.forEach(list => {
      if (list.productName === selectedProductName) {
        list.count = list.count + 1;
      }
    });
    localStorage.setItem("cartProducts", JSON.stringify(existingCartData));
    setCartData(existingCartData);
  };

  const decreaseItemsFromCart = selectedProductName => {
    let existingCartData = [...cartData];
    existingCartData.forEach(list => {
      if (list.productName === selectedProductName && list.count >= 2) {
        list.count = list.count - 1;
      }
    });
    localStorage.setItem("cartProducts", JSON.stringify(existingCartData));
    setCartData(existingCartData);
  };

  const deleteItemsFromCart = selectedProductName => {
    let existingCartData = [...cartData];
    let filteredData = existingCartData.filter(
      list => list.productName !== selectedProductName
    );
    localStorage.setItem("cartProducts", JSON.stringify(filteredData));
    setCartData(filteredData);
    let cartCount = localStorage.getItem("cartCount");
    localStorage.setItem("cartCount", parseInt(cartCount) - 1);
  };

  const productImages = {
    Dungaree,
    RedFrock,
    BlueJacket,
    PinkJacket,
    StripedSaree,
    YellowDress,
    FormalShirt,
    DrumKeyboard,
    Himalaya,
    JungleBook,
    LaughingBoy,
    MamaEarth,
    Pikachu,
    Teddy
  };

  let productsInCart = cartData.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className="product">
          <i
            className="fas fa-times-circle"
            onClick={() => deleteItemsFromCart(product.productName)}
          />
          <img
            src={productImages[product.productName]}
            alt={product.productName}
          />
          <span className="sm-hide">{product.productName}</span>
        </div>

        <div className="price sm-hide"> {product.price}.00</div>
        <div className="quantity">
          <i
            className="fas fa-plus-circle"
            onClick={() => addItemsToCart(product.productName)}
          />
          <span className="product-quantity">{product.count}</span>
          <i
            className="fas fa-minus-circle"
            onClick={() => decreaseItemsFromCart(product.productName)}
          />
        </div>
        <div className="total">{product.count * product.price}.00 </div>
      </Fragment>
    );
  });

  return (
    <div>
      <Header />
      <div className="container-products">
        <div className="product-header">
          <h5 className="product-title">PRODUCT</h5>
          <h5 className="price sm-hide">PRICE</h5>
          <h5 className="quantity">QUANTITY</h5>
          <h5 className="total">TOTAL</h5>
        </div>
        <div className="products">{productsInCart}</div>
        <div className="basketTotalContainer">
          <h4 className="basketTotalTitle"> Total Amount </h4>
          <h4 className="basketTotal">{getTotalCount()}.00</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
