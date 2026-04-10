import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Burger() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    { name: "Classic Veg Burger", price: 99 },
    { name: "Cheese Burger", price: 129 },
    { name: "Paneer Burger", price: 149 },
    { name: "Grilled Chicken Burger", price: 179 },
    { name: "Double Patty Burger", price: 199 },
    { name: "BBQ Chicken Burger", price: 219 },
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
          const burgerItems = json.items.filter(
            (item) => item.category === "Burger",
          );
          setItems([...initialItems, ...burgerItems]);
        }
      } catch (e) {
        console.error("Failed to fetch burgers", e);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="menu-page">
      <header>{"🍔 Aditya Restaurant - Burger Menu"}</header>
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
