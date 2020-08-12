import React from "react";
import clothingcover from "../assets/clothingcover.jpg";
import babyShopcover from "../assets/babyShopcover.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="home-header">
        <div className="overlay" />
        <nav>
          <h2>Online Shopping</h2>
        </nav>
      </div>
      <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
        <div
          style={{
            fontFamily: "Dancing Script",
            fontSize: "40px",
            paddingTop: "20px",
            paddingBottom: "20px"
          }}
        >
          Build your Choice{" "}
        </div>
        <div className="image-container">
          <img
            className="cover-image"
            style={{ width: "70%" }}
            src={clothingcover}
            alt="products"
          />
          <div className="cover-text">
            <Link to="/clothing" className="text">
              Click Here
            </Link>
          </div>
        </div>

        <div className="image-container">
          <img
            className="cover-image"
            style={{ width: "70%" }}
            src={babyShopcover}
            alt="products"
          />
          <div className="cover-text">
            <Link to="/products" className="text">
              Click Here
            </Link>
          </div>
        </div>

        <div>
          {/* <img style={{ width: "70%" }} src={clothingcover} alt="products" /> */}
          {/* <img
            style={{ width: "70%", marginTop: "22px" }}
            src={babyShopcover}
            alt="babyShopcover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
