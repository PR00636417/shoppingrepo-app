import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../App.css";
import productsList from "../tools/products.json";
import {
  AddToCart,
  CartProductsCount,
  getProducts
} from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import CustomToastMessage from "./CustomToastMessage";

const Products = () => {
  const dispatch = useDispatch();
  const { cartCount, cartProducts } = useSelector(state => state.userData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      dispatch(getProducts());
    },
    [dispatch]
  );

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
        price: productsList[selectedProductName].price,
        url: productsList[selectedProductName].url
      });
      dispatch(AddToCart(existingCartProducts));
      dispatch(CartProductsCount(parseInt(cartCount) + 1));
      setErrorMessage("");
      setSuccessMessage("Item is added into cart successfully");
      setShow();
    } else {
      setSuccessMessage("");
      setShow();
      setErrorMessage("Item already exists in cart");
    }
  };

  let productListItems = [];
  Object.entries(productsList).forEach(items => {
    productListItems.push(items[1]);
  });

  let renderProductList = productListItems.map((product, index) => {
    return (
      <div className="image" key={index} style={{ marginTop: "2%" }}>
        <img
          src={require(`../assets/babyproducts/${product.url}`)}
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
      <CustomToastMessage
        show={show}
        setShow={setShow}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Products;
