import * as types from "./actionTypes";

export function AddToCart(cartItems) {
  return { type: types.ADD_TO_CART, cartItems };
}

export function CartProductsCount(cartCount) {
  return {
    type: types.CART_PRODUCTS_COUNT,
    cartCount
  };
}

export function IncreaseItemsInCart(selectedProductName) {
  return {
    type: types.INCREASE_ITEMS_IN_CART,
    selectedProductName
  };
}

export function DecreaseItemsInCart(selectedProductName) {
  return {
    type: types.DECREASE_ITEMS_IN_CART,
    selectedProductName
  };
}

export function DeleteItemsFromCart(selectedProductName) {
  return {
    type: types.DELETE_ITEMS_FROM_CART,
    selectedProductName
  };
}

export function getProducts() {
  return {
    type: types.GET_PRODUCTS
  };
}
