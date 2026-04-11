import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cake() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    {
      name: "Chocolate Truffle Cake",
      price: 399,
    },
    {
      name: "Black Forest Cake",
      price: 349,
    },
    {
      name: "Red Velvet Cake",
      price: 449,
    },
    {
      name: "Strawberry Cake",
      price: 379,
    },
    {
      name: "Vanilla Cream Cake",
      price: 299,
    },
    {
      name: "Special Designer Cake",
      price: 599,
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
            (item) => item.category === "Cake",
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
      <header>{"🎂 Aditya Restaurant - Cake Menu"}</header>
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
