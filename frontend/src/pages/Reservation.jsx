import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookTable = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      alert("Please log in to reserve a table.");
      navigate("/All_Background_Component/log-in.html");
      return;
    }
    try {
      const response = await fetch(
        (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/reservation/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const json = await response.json();
      if (json.success) {
        alert(
          "Table Reserved Successfully! Your reservation is stored in the database.",
        );
        setFormData({ name: "", email: "", guests: "", request: "" });
      } else {
        alert("Failed to reserve table.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="reservation-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `.reservation-page .reservation {
  padding: 3rem 2rem;
  margin: 2.5rem;
  box-shadow: 0 10px 28px rgba(184, 92, 56, 0.15);
  gap: 3rem;
  text-align: center;
  background: #fff3e6;
  border-radius: 14px;
  flex-wrap: wrap;
}
.reservation-page .reservation h2 {
  color: #b85c38;
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.reservation-page .reservation form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  gap: 15px;
}
.reservation-page .reservation input,
.reservation-page .reservation textarea {
  padding: 12px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
}
.reservation-page .reservation button {
  background-color: transparent;
  color: #b85c38;
  border: 2px solid #b85c38;
  padding: 20px 50px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 1.8rem;
  box-shadow: none;
  cursor: pointer;
}
.reservation-page .reservation button:hover {
  background-color: #b85c38;
  color: white;
}`,
        }}
      />

      <section className="reservation">
        <h2>Reserve Your Table</h2>
        <form onSubmit={handleBookTable}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Number of Guests"
            required
          />
          <textarea
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Special Request"
            rows="4"
          ></textarea>
          <button type="submit">Book Now</button>
        </form>
      </section>
    </div>
  );
}
