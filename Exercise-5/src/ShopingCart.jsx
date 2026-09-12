import { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "keyboard", price: 40, quantity: 1 },
  ]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Ku darida badeecad cusub
  const addProduct = () => {
    if (productName.trim() === "" || productPrice.trim() === "") {
      alert("Fadlan buuxi magaca iyo qiimaha!");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      name: productName.trim(),
      price: parseFloat(productPrice),
      quantity: 1,
    };

    setCart([...cart, newProduct]);
    setProductName("");
    setProductPrice("");
  };

  // Kordhinta quantity-ga
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Dhimista quantity-ga
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Masaxida badeecada
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Xisaabinta qiimaha guud (Total Price)
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>
      <br />

      {cart.length > 0 ? (
        <>
          <h2>Products in Cart</h2>

          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <br />
                <span>Quantity: </span>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span> {item.quantity} </span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <br />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      ) : (
        <h2>Cart is empty!</h2>
      )}
    </>
  );
};

export default ShoppingCart;
