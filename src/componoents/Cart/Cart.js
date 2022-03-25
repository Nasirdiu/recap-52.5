import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let balance = 0;
  let cost = 0;
  for (const product of cart) {
    balance = balance + product.balance;
    cost = cost + product.cost;
  }
  const tax = parseFloat((balance * 0.1).toFixed(2));
  const grandTotal = (balance + cost + tax).toFixed(2);
  return (
    <div className="cart">
      <h4>Order Prosing</h4>
      <p>Select Item:{cart.length}</p>
      <p>Blance: ${balance.toFixed(2)}</p>
      <p>Cost:${cost}</p>
      <p>Tax${tax}</p>
      <p>Grand Total:${grandTotal}</p>
    </div>
  );
};

export default Cart;
