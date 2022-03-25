import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";
import Cart from "../Cart/Cart";
import "./Product.css";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`generated.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handeler = (product) => {
    const newCard = [...cart, product];
    setCart(newCard);
  };
  return (
    <div  className="product">
      <div className="product-container">
        <div className="product-map">
          {products.map((product) => (
            <Service
              key={product.id}
              product={product}
              handeler={handeler}
            ></Service>
          ))}
        </div>
      </div>
      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Product;
<h1>hello </h1>;
