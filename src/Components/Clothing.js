import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import clothingList from "../tools/clothing.json";
import { AddToCart, CartProductsCount } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import CustomToastMessage from "./CustomToastMessage";

const Clothing = () => {
  const dispatch = useDispatch();
  const { cartCount, cartProducts } = useSelector(state => state.userData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  const addToCart = selectedProductName => {
    let cartProductsLength = [];
    cartProductsLength = cartProducts.filter(
      list => list.productName === selectedProductName
    );

    if (cartProductsLength.length === 0) {
      let existingCartProducts = [...cartProducts];
      existingCartProducts.push({
        productName: selectedProductName,
        count: 1,
        price: clothingList[selectedProductName].price,
        url: clothingList[selectedProductName].url
      });
      dispatch(AddToCart(existingCartProducts));
      dispatch(CartProductsCount(parseInt(cartCount) + 1));
      setErrorMessage("");
      setSuccessMessage("Item is added into cart successfully");
      setShow();
    } else {
      setSuccessMessage("");
      setErrorMessage("Item already exists in cart");
      setShow();
    }
  };

  let clothingListItems = [];
  Object.entries(clothingList).forEach(items => {
    clothingListItems.push(items[1]);
  });

  let renderClothingList = clothingListItems.map((product, index) => {
    return (
      <div className="image" key={index} style={{ marginTop: "2%" }}>
        <img
          src={require(`../assets/clothing/${product.url}`)}
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
      <CustomToastMessage
        show={show}
        setShow={setShow}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Clothing;
