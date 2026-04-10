import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Pizza() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    {
      name: "Margherita Pizza",
      price: 199,
    },
    {
      name: "Farmhouse Pizza",
      price: 249,
    },
    {
      name: "Paneer Tikka Pizza",
      price: 269,
    },
    {
      name: "Veggie Delight Pizza",
      price: 229,
    },
    {
      name: "Chicken Pepperoni Pizza",
      price: 299,
    },
    {
      name: "BBQ Chicken Pizza",
      price: 279,
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
            (item) => item.category === "Pizza",
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
      <header>{"🍕 Aditya Restaurant - Pizza Menu"}</header>
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
