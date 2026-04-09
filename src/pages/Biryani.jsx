
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Biryani() {
    const { cart: mainCart, addToCart, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();
    

const initialItems = [
{
    "name": "Veg Biryani",
    "price": 149
  },
  {
    "name": "Hyderabadi Biryani",
    "price": 199
  },
  {
    "name": "Chicken Biryani",
    "price": 229
  },
  {
    "name": "Mutton Biryani",
    "price": 279
  },
  {
    "name": "Egg Biryani",
    "price": 169
  },
  {
    "name": "Special Dum Biryani",
    "price": 299
  }
];
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/food/fetchall");
                const json = await response.json();
                if (json.success) {
                    const catItems = json.items.filter(item => item.category === "Biryani");
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
        {"🍛 Aditya Restaurant - Biryani Menu"}
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

