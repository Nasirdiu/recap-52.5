import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Service.css";
const Service = ({ handeler, product }) => {
  const { img, balance, cost, name } = product;

  return (
    <div data-aos="zoom-in-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
     className="service">
      <img src={img} alt="" />
      <p className="name">Name:{name}</p>
      <p>balance:-{balance}</p>
      <p>Cost:{cost}</p>

      <button onClick={()=>handeler(product)} className="btn-product">
        <p className="text">Add Product</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Service;
