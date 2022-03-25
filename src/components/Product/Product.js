import React, { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import "./Product.css";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`generated.json`)
      .then((reg) => reg.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="product">
      <div className="product-container">
      {products.map((product) => (
          <Dog key={product.id} product={product}></Dog>
        ))}
      </div>
      <div className="order-container">
        <h3>order process</h3>
      </div>
    </div>
  );
};

export default Product;
