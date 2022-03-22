import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const haldleCartAdd = (product) => {
    const newCard = [...cart, product];
    setCart(newCard);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            haldleCartAdd={haldleCartAdd}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <h4>Oder Summary</h4>
        <p>Select Item:{cart.length}</p>
        <p>Total Price: $</p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $</p>
        <p className="order-grand">Grand Total: $</p>
        <div className="btn-order">
          <button className="btn-delete">Clear Cart
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button> <br /> <br />
          <button className="btn-review">Review Order</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
