import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Paneer() {
  const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const initialItems = [
    {
      name: "Paneer Butter Masala",
      price: 180,
    },
    {
      name: "Shahi Paneer",
      price: 200,
    },
    {
      name: "Kadai Paneer",
      price: 190,
    },
    {
      name: "Paneer Tikka",
      price: 220,
    },
    {
      name: "Chilli Paneer",
      price: 170,
    },
    {
      name: "Palak Paneer",
      price: 160,
    },
  ];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "/api/food/fetchall",
        );
        const json = await response.json();
        if (json.success) {
          const catItems = json.items.filter(
            (item) => item.category === "Paneer",
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
      <header>{"🧀 Aditya Restaurant - Paneer Menu"}</header>
      <div className="container">
        <div className="menu">
          <h2>Menu</h2>
          {items.map((it, idx) => (
            <div className="item" key={idx}>
              <span>
                {it.name} - ₹{it.price}
              </span>
              <button onClick={() => addToCart(it.name, it.price)}>
                Move to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {pageCart.map((c, index) => (
              <li key={index}>
                {c.item} - ₹{c.price}
                <button onClick={() => removeFromPageCart(index)}>X</button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => moveToMainCart(index)}
                >
                  Move to Main Cart
                </button>
              </li>
            ))}
          </ul>
          <div className="total">
            Total: ₹<span>{getTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
