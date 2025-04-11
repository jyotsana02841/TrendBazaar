import React from "react";
import { useCart } from "../CartContext";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
  
    clearCart();
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                <div className="container">
                  <div className="image">
                    <img src={item.image} alt={item.title || "Item"} />
                  </div>

                  <span className="title">{item.title}</span>
                  <p>
                    {item.description
                      ? item.description.split(" ").slice(0, 10).join(" ") +
                        "..."
                      : "No description available"}
                  </p>

                  <div className="price">
                    <span>₹ {item.price}</span>
                    <button
                      className="btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
