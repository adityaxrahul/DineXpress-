import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("adityaCart");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("adityaCart", JSON.stringify(cart));
    } catch (error) {
      
    }
  }, [cart]);

  const addToCart = (item, price) => {
    setCart((prev) => [...prev, { item, price }]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, c) => sum + c.price, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
