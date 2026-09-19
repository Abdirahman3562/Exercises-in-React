import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Product ku dar cart-ka
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Product ka saar cart-ka
  const removeFromCart = (index) => {
    setCart(cart.filter((product, i) => i !== index));
  };

  return (
    <ProductContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;