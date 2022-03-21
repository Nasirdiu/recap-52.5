import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  // const{product,handleAddToCart}=props;
  const { name, price, img, ratings, seller } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className={"product-name"}>{name}</p>
        <p>Price:${price}</p>
        <p>
          <small>Manufacturer:{seller}</small>
        </p>
        <p>
          <small>Rating:{ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
<h1>product</h1>;
