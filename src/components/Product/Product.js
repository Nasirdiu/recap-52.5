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
    if (newCart.length === 5) {
      alert("No Add Product");
    } else {
      setCart(newCart);
    }
    if ((product = product)) {
      product = [];
    }
  };
  const remove = () => {
    const removeAll = [];
    setCart(removeAll);
  };

  return (
    <div className="product">
      <div className="product-container">
        {products.map((product) => (
          <Dog key={product.id} product={product} handeler={handeler}></Dog>
        ))}
      </div>
      <div className="order-container">
        <div>
          <h3>Order Dog</h3>
        </div>
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <div className="mt-3">
          <button className="btn-cart">Choose For 1 Me</button>
          <button onClick={remove} className="btn-cart">
            Rest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;