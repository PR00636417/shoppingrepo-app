import React from "react";
//import "./App.css";
import { Route, Switch } from "react-router-dom";
import Clothing from "./Components/Clothing";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/clothing" component={Clothing} />
        <Route path="/products" component={Products} />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
