import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let name = "";
  let img = "";
  for (const dog of cart) {
    name =dog.name;
    img = dog.img;
  }
  return (
    <div className="cart">
      <h3>Order Dog</h3>
      <div className="cart-img d-flex justify-content-center  align-items-center gap:5">
        <img className="img-fluid" src={img} alt="" />
        <h5>
          {name} <br />
        </h5>
      </div>
      <div className="mt-3">
        <button className="btn-cart">Choose For 1 Me</button>
        <button className="btn-cart">Rest</button>
      </div>
    </div>
  );
};

export default Cart;
