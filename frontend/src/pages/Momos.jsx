import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Momos() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    {
      name: "Steamed Veg Momos",
      price: 120,
    },
    {
      name: "Steamed Chicken Momos",
      price: 150,
    },
    {
      name: "Fried Momos",
      price: 140,
    },
    {
      name: "Paneer Momos",
      price: 160,
    },
    {
      name: "Spicy Tandoori Momos",
      price: 180,
    },
    {
      name: "Cheese Burst Momos",
      price: 200,
    },
  ];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch((import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/food/fetchall",
        );
        const json = await response.json();
        if (json.success) {
          const catItems = json.items.filter(
            (item) => item.category === "Momos",
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
      <header>{"🥟 Aditya Restaurant - Momos Menu"}</header>
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
