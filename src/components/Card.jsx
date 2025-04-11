import React from "react";
import "./Card.css";
import { useCart } from "../CartContext";

const Card = ({ card }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === card.id);

  return (
    <div className="container">
      <div className="image">
        <img src={card.image} />
      </div>

      <span className="title">{card.title}</span>
      <span className="description">
        {card.description.split(" ").slice(0, 10).join(" ") + "..."}
      </span>
      <div className="price">
        <span>$ {card.price}</span>

        {isInCart ? (
          <button className="btn" onClick={() => removeFromCart(card.id)}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn" onClick={() => addToCart(card)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
