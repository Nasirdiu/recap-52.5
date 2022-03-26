import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { item } = props;
  return (
    <div>
      <div className="cart-img d-flex justify-content-center  align-items-center ">
        <img src={item.img} alt="" />
        <h5>
          {item.name} <br />
        </h5>
      </div>
      
    </div>
  );
};

export default Cart;
