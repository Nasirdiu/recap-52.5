import React from "react";
import "./Dog.css";
const Dog = (props) => {
  console.log(props.product);
  const { name, price, img } = props.product;
  return (
    <div className="dog-container">
      <img src={img} alt="" />
      <p>Name:{name}</p>
      <p>Price:${price}</p>
    </div>
  );
};

export default Dog;
