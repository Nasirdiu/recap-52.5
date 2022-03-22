import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nov-product">
      <img src={logo} alt="" />
      <div>
          <a href="">Shop</a>
          <a href="">Order</a>
          <a href="">Invoice</a>
          <a href="">About</a>
      </div>
    </nav>
  );
};

export default Header;
