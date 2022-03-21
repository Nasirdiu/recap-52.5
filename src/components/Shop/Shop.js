import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((rsc) => rsc.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
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
        <h3>Order Summary</h3>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
