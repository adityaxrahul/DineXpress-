import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "/api/order/fetchall",
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        },
      );
      const json = await response.json();
      if (json.success) {
        setOrders(json.orders);
      } else {
        alert("Found no orders");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="orders-page"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h2 style={{ color: "#b85c38", marginBottom: "20px" }}>
        Orders Database
      </h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {orders.length === 0 ? (
            <p>No orders found in the database.</p>
          ) : (
            orders.map((order, i) => (
              <div
                key={order._id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "15px",
                  background: "#fff8f3",
                }}
              >
                <h3>Order ID: {order._id}</h3>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Total Amount:</strong> ₹{order.totalAmount}
                </p>
                <p>
                  <strong>Date Placed:</strong>{" "}
                  {new Date(order.date).toLocaleString()}
                </p>
                <h4>Items:</h4>
                <ul style={{ paddingLeft: "20px" }}>
                  {order.items.map((item, id) => (
                    <li key={id}>
                      {item.name} - ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
