import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = ({ haldleCartAdd, product }) => {
  const { name, price, ratings, img, seller } = product;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="product"
    >
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price:${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating:{ratings}</p>
        
      </div>
      <button onClick={() => haldleCartAdd(product)} className="btn-cart">
        <p className="btn-text">Add To Card</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
