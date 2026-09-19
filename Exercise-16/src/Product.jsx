import { useContext } from "react";
import ProductContext from "./ProductContext";

const Product = () => {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);

  return (
    <div>
      <h3>Widget</h3>
      <p>Price: $19.99</p>

      <button onClick={() => addToCart("Widget")}>Add to Cart</button>

      <h3>Gadget</h3>
      <p>Price: $29.99</p>

      <button onClick={() => addToCart("Gadget")}>Add to Cart</button>

      <h2>Cart Summary</h2>

      <p>Total Items: {cart.length}</p>

      {cart.map((product, index) => (
        <div key={index}>
          <span>{product}</span>

          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
