import React from "react";
import "./Dog.css";
const Dog = (props) => {
  console.log(props.product);
  const { name, price, img } = props.product;
  return (
    <div className="dog-container">
      <img src={img} alt="" />
      <p className="name">Name:{name}</p>
      <p>Price:${price}</p>
      <button className="btn-container"><p>Add TO Card</p></button>
    </div>
  );
};

export default Dog;
