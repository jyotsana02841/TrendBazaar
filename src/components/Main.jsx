import React, { useState, useEffect } from "react";
import "./Main.css";
import Card from "./Card";
import "remixicon/fonts/remixicon.css";
import { useCart } from "../CartContext";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search term
  const { cart, addToCart } = useCart();

  const categories = [
    { label: "All", value: "all" },
    { label: "Clothes", value: "men's clothing" },
    { label: "Jewellery", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
    { label: "Women", value: "women's clothing" },
  ];

  async function fetchData() {
    try {
      const a = await fetch("https://fakestoreapi.com/products");
      const data = await a.json();
      setCards(data);
    } catch (error) {
      console.log("Unable to fetch data");
      setCards([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCards = cards
    .filter((card) =>
      selectedCategory === "all" ? true : card.category === selectedCategory
    )
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <main className="content">
        <div className="text">
          <h1>Welcome to TrendBazaar!</h1>
          <div className="boxes">
            <div className="box">25+ Years of trust</div>
            <div className="box2">
              <p>
                Your one-stop shop for the latest fashion, gadgets, and home
                essentials.
              </p>
              <p>
                Explore handpicked collections, exclusive deals, and trending
                styles — all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* 🔍 Search Bar */}
        <div className="searchbar" >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="explore">
          <h1>Explore</h1>
          <hr />
          <div className="categories">
            {categories.map((cat) => (
              <li
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  cursor: "pointer",
                  fontWeight:
                    selectedCategory === cat.value ? "bold" : "normal",
                }}
              >
                {cat.label}
              </li>
            ))}
          </div>
        </div>

        <div className="products">
          <div className="card">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <Card key={card.id} card={card} />
              ))
            ) : (
              <p style={{ margin: "20px", textAlign: "center" }}>
                No products found.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
