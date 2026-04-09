
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Chicken() {
    const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();
    

const initialItems = [
{
    "name": "Chicken Curry",
    "price": 250
  },
  {
    "name": "Butter Chicken",
    "price": 280
  },
  {
    "name": "Tandoori Chicken",
    "price": 300
  },
  {
    "name": "Chicken Biryani",
    "price": 220
  },
  {
    "name": "Grilled Chicken",
    "price": 270
  },
  {
    "name": "Chicken Tikka Masala",
    "price": 260
  },
  {
    "name": "Chicken Kebab",
    "price": 180
  }
];
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/food/fetchall");
                const json = await response.json();
                if (json.success) {
                    const catItems = json.items.filter(item => item.category === "Chicken");
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
        {"🍗 Aditya Restaurant - Chicken Menu"}
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

