import React, { Fragment } from "react";
import Header from "./Header";
import clothingList from "../tools/clothing.json";
import { useDispatch, useSelector } from "react-redux";
import {
  IncreaseItemsInCart,
  DecreaseItemsInCart,
  DeleteItemsFromCart
} from "../redux/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(state => state.userData);

  let orginalValue = 0;
  let sumValue = 0;
  const getTotalCount = () => {
    let totalCartData = [...cartProducts];
    if (totalCartData.length > 0 && orginalValue === 0) {
      totalCartData.forEach(productList => {
        sumValue = orginalValue + productList.count * productList.price;
        orginalValue = sumValue;
      });
    }
    return sumValue;
  };
  const addItemsToCart = selectedProductName => {
    dispatch(IncreaseItemsInCart(selectedProductName));
  };

  const handleDecreaseItemsFromCart = selectedProductName => {
    dispatch(DecreaseItemsInCart(selectedProductName));
  };

  const handleDeleteItemsFromCart = selectedProductName => {
    dispatch(DeleteItemsFromCart(selectedProductName));
  };

  let clothingListItems = [];
  Object.entries(clothingList).forEach(items => {
    clothingListItems.push(items[1]);
  });

  let productsInCart = cartProducts.map((product, index) => {
    let cartList = clothingListItems.filter(
      list => list.name === product.productName
    );
    return (
      <Fragment key={index}>
        <div className="product">
          <i
            className="fas fa-times-circle"
            onClick={() => handleDeleteItemsFromCart(product.productName)}
          />
          <img
            src={
              cartList.length > 0
                ? require(`../assets/clothing/${product.url}`)
                : require(`../assets/babyproducts/${product.url}`)
            }
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
            onClick={() => handleDecreaseItemsFromCart(product.productName)}
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
