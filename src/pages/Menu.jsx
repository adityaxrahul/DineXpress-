
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Menu() {
    const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();
    

const initialItems = [
{
    "name": "Pizza",
    "price": 50
  },
  {
    "name": "Burger",
    "price": 50
  },
  {
    "name": "Biryani",
    "price": 50
  },
  {
    "name": "Cakes",
    "price": 60
  },
  {
    "name": "North Indian",
    "price": 30
  },
  {
    "name": "Momos",
    "price": 90
  },
  {
    "name": "Chicken",
    "price": 50
  },
  {
    "name": "Rolls",
    "price": 50
  },
  {
    "name": "Paneer",
    "price": 50
  }
];
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/food/fetchall");
                const json = await response.json();
                if (json.success) {
                    const catItems = json.items;
                    setItems([...initialItems, ...catItems]);
                }
            } catch(e) {
                console.error("Failed to fetch", e);
            }
        };
        fetchItems();
    }, []);
  
  return (
    <div className="menu-page">
            <header>
        {"Aditya Reasturant - Menu Page"}
      </header>
      <div className="container">
        <div className="menu">
          <h2>Menu</h2>
          {items.map((it, idx) => (
            <div className="item" key={idx}>
              <span>{it.name} - ₹{it.price}</span>
               <button onClick={() => { addToCart(it.name, it.price); alert(`${it.name} added to cart!`); }}>Add to Cart</button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

