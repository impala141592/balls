import React from "react";
import image from "../assets/hero.jpg";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card-info">
        <span className="name">name</span>
        <div className="prices">
          <span className="price">29.99</span>
          <div className="discount">
            <span className="price">19.99</span>
            <span className="percentage"> 15%</span>
          </div>
        </div>
      </div>
      {/* <img src={image} alt="" /> */}
    </div>
  );
}

export default ProductCard;
