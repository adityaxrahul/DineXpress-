import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Rolls() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    {
      name: "Veg Roll",
      price: 100,
    },
    {
      name: "Paneer Roll",
      price: 130,
    },
    {
      name: "Chicken Roll",
      price: 150,
    },
    {
      name: "Egg Roll",
      price: 120,
    },
    {
      name: "Cheese Roll",
      price: 160,
    },
    {
      name: "Spicy Kathi Roll",
      price: 180,
    },
  ];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://dinexpress-6r1c.onrender.com/api/food/fetchall",
        );
        const json = await response.json();
        if (json.success) {
          const catItems = json.items.filter(
            (item) => item.category === "Rolls",
          );
          setItems([...initialItems, ...catItems]);
        }
      } catch (e) {
        console.error("Failed to fetch", e);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="menu-page">
      <header>{"🌯 Aditya Restaurant - Rolls Menu"}</header>
      <div className="container">
        <div className="menu">
          <h2>Menu</h2>
          {items.map((it, idx) => (
            <div className="item" key={idx}>
              <span>
                {it.name} - ₹{it.price}
              </span>
              <button
                onClick={() => {
                  addToCart(it.name, it.price);
                  alert(`${it.name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
