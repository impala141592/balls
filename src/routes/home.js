import React from "react";
import Hero from "../ui/hero";
import ProductCard from "../ui/product-card";

function Home() {
  return (
    <div className="route home">
      <Hero />
      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
