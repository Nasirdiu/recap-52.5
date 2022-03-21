import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((rsc) => rsc.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart=(product)=>{
    console.log(product);
}
  return (
    <div className="shop-container">
      <div className="product-container">
     <div className="product-container">
     {products.map((product) => (
          <Product 
          key={product.id}
          handleAddToCart={handleAddToCart}
          product={product}
          ></Product>
        ))}
     </div>
      </div>
      <div className="cart-container">
        <h3>order place</h3>
      </div>
    </div>
  );
};

export default Shop;
