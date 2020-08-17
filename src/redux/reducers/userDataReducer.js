import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cartProducts: action.cartItems
      };

    case types.CART_PRODUCTS_COUNT:
      return {
        ...state,
        cartCount: action.cartCount
      };

    case types.INCREASE_ITEMS_IN_CART:
      let existingCartData = [...state.cartProducts];
      state.cartProducts.forEach((list, index) => {
        if (list.productName === action.selectedProductName) {
          existingCartData[index] = {
            productName: list.productName,
            count: list.count + 1,
            price: list.price,
            url: list.url
          };
        }
      });
      return {
        ...state,
        cartProducts: existingCartData
      };

    case types.DECREASE_ITEMS_IN_CART:
      let initialCartData = [...state.cartProducts];
      initialCartData.forEach((list, index) => {
        if (
          list.productName === action.selectedProductName &&
          list.count >= 2
        ) {
          initialCartData[index] = {
            productName: list.productName,
            count: list.count - 1,
            price: list.price,
            url: list.url
          };
        }
      });
      return {
        ...state,
        cartProducts: initialCartData
      };

    case types.DELETE_ITEMS_FROM_CART:
      let cartData = [...state.cartProducts];
      let initialCount = state.cartCount;
      let filteredCartData = cartData.filter(
        list => list.productName !== action.selectedProductName
      );
      return {
        ...state,
        cartProducts: filteredCartData,
        cartCount: initialCount - 1
      };

    default:
      return state;
  }
}
