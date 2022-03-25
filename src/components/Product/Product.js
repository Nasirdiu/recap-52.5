import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Dog from "../Dog/Dog";
import "./Product.css";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`generated.json`)
      .then((reg) => reg.json())
      .then((data) => setProducts(data));
  }, []);
  const handeler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="product">
      <div className="product-container">
        {products.map((product) => (
          <Dog key={product.id} product={product} handeler={handeler}></Dog>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Product;
