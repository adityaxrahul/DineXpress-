import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      alert("Please add items before placing order.");
      return;
    }

    if (!localStorage.getItem("token")) {
      alert("Please login to place your order.");
      navigate("/All_Background_Component/log-in.html", {
        state: { returnTo: "/All_Background_Component/cart.html" },
      });
      return;
    }

    const items = cart.map((c) => ({ name: c.item, price: c.price }));
    const totalAmount = getTotal();

    try {
      const response = await fetch(
        (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/order/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ items, totalAmount }),
        },
      );

      if (!response.ok) {
         if (response.status === 401) {
            alert("Session expired, please login again.");
            return;
         }
         alert("Cannot process order right now. Database is currently disconnected from Render backend.");
         return;
      }

      const json = await response.json();

      if (json.success) {
        clearCart();
        alert(
          "Your order has been placed successfully! Total: ₹" +
            totalAmount,
        );
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      alert("Please wait. The backend is waking up right now.");
    }
  };

  return (
    <div className="cart-page">
      <header>🛒 Your Cart - Aditya Restaurant</header>
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((c, index) => (
                <li key={index}>
                  {c.item} - ₹{c.price}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="total">Total: ₹{getTotal()}</div>

            <button
              className="place-order"
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
