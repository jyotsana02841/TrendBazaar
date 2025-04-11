import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success("Item added to Cart!");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from Cart!");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Order placed successfully!");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
      <ToastContainer autoClose={2000} />
    </CartContext.Provider>
  );
};
