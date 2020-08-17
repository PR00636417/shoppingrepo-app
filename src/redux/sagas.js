import * as types from "./actions/actionTypes";
import { take } from "redux-saga/effects";
import axios from "axios";

export function* getProducts() {
  while (true) {
    yield take(types.GET_PRODUCTS);

    const response = yield axios
      .get("./products.json")
      .then(res => console.log("Response", res))
      .catch(error => {
        console.log("errorr", error);
      });

    console.log("response", response);
  }
}
