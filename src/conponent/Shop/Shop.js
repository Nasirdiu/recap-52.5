import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

  useEffect(() => {
    const storedCard = getStoredCard();
    const saveCard = [];
    for (const id in storedCard) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        saveCard.push(addedProduct);
      }
    }
    setCart(saveCard);
  }, [products]);
  const haldleCartAdd = (selectedProduct) => {
    let newCard = [];
    const exites = cart.find((product) => product.id === selectedProduct.id);
    if (!exites) {
      selectedProduct.quantity = 1;
      newCard = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exites.quantity = exites.quantity + 1;
      newCard = [...rest, exites];
    }

    setCart(newCard);
    addToDb(selectedProduct.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
