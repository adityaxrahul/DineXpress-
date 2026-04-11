import React from "react";
import { useCart } from "./context/CartContext";
import img0 from "./assets/image_of_project/pexels-adrienn-638530-1537635.jpg";
import img1 from "./assets/image_of_project/pexels-elevate-1267320.jpg";
import img2 from "./assets/image_of_project/pexels-enginakyurt-1435909.jpg";
import img3 from "./assets/image_of_project/pexels-valeriya-842571.jpg";
import img4 from "./assets/image_of_project/pexels-valeriya-1833349.jpg";
import img5 from "./assets/image_of_project/pexels-solliefoto-313700.jpg";
import img6 from "./assets/image_of_project/pexels-fotios-photos-1855214.jpg";
import img7 from "./assets/image_of_project/pexels-enginakyurt-1487511.jpg";
import img8 from "./assets/image_of_project/Chef.jpg";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

import {
  About,
  Aboutchef,
  Biryani,
  Burger,
  Cake,
  Cart,
  Chicken,
  Contactsection,
  Event,
  Gallery,
  Login,
  Menu,
  Momos,
  Northindian,
  Paneer,
  Pizza,
  Reservation,
  Rolls,
  Singup,
  Orders,
  AdminPage,
} from "./pages";

function Home() {
  const { cart } = useCart();
  const [query, setQuery] = React.useState("");
  const [reservation, setReservation] = React.useState({ name: '', email: '', guests: '', request: '' });
  const navigate = useNavigate();

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      alert("Please log in to reserve a table.");
      navigate("/All_Background_Component/log-in.html");
      return;
    }
    try {
      const response = await fetch("/api/reservation/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation)
      });
      const json = await response.json();
      if (json.success) {
        alert("Table Reserved Successfully! Your reservation is stored in the database.");
        setReservation({ name: '', email: '', guests: '', request: '' });
      } else {
        alert("Failed to reserve table.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  const menuItems = [
    {
      name: "Pizza",
      path: "/All_Background_Component/pizza.html",
      emoji: "🍕",
    },
    {
      name: "Burger",
      path: "/All_Background_Component/burger.html",
      emoji: "🍔",
    },
    {
      name: "Biryani",
      path: "/All_Background_Component/biryani.html",
      emoji: "🍛",
    },
    { name: "Cake", path: "/All_Background_Component/cake.html", emoji: "🍰" },
    {
      name: "North Indian",
      path: "/All_Background_Component/northindian.html",
      emoji: "🍲",
    },
    {
      name: "Chicken",
      path: "/All_Background_Component/chicken.html",
      emoji: "🍗",
    },
    {
      name: "Momos",
      path: "/All_Background_Component/momos.html",
      emoji: "🥟",
    },
    {
      name: "Rolls",
      path: "/All_Background_Component/rolls.html",
      emoji: "🌯",
    },
    {
      name: "Paneer",
      path: "/All_Background_Component/paneer.html",
      emoji: "🧀",
    },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    alert('Logged out successfully');
    window.location.reload();
  };

  return (
    <>
      <header className="nav23 sticky">
        <div className="logo">Aditya Restro</div>

        <div className="search-box">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for delicious meal"
          />
        </div>

        <div className="links">
          {!localStorage.getItem('token') ? (
            <>
              <Link to="/All_Background_Component/log-in.html">Log in</Link>
              <Link to="/All_Background_Component/singup.html">Sign up</Link>
            </>
          ) : (
            <>
              {localStorage.getItem('isAdmin') === 'true' && (
                <Link to="/All_Background_Component/admin.html">Admin</Link>
              )}
              <Link to="/All_Background_Component/orders.html">My Orders</Link>
              <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold', marginLeft: '18px' }}>Log out</button>
            </>
          )}
        </div>

        <div className="cart-icon">
          <Link to="/All_Background_Component/cart.html">🛒 {cart.length}</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1>Aditya Restro</h1>
          <p>Where varieties meet flavor — fast, fresh, and handmade.</p>
          <div className="hero-buttons">
            <Link
              className="primary-btn"
              to="/All_Background_Component/Menu.html"
            >
              Explore Menu
            </Link>
            <Link
              className="secondary-btn"
              to="/All_Background_Component/cart.html"
            >
              View Cart ({cart.length})
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt="Food Background"
          />
        </div>
      </section>

      <div className="container1">
        <p>Menu We Serve</p>
      </div>

      <div className="box12">
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            alt="Pizza Image"
          />
          <Link
            to="/All_Background_Component/pizza.html"
            className="pizza-button"
          >
            Pizza
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            alt="Burger Image"
          />
          <Link
            to="/All_Background_Component/burger.html"
            className="pizza-button"
          >
            Burger
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png"
            alt="Biryani Image"
          />
          <Link
            to="/All_Background_Component/biryani.html"
            className="pizza-button"
          >
            Biryani
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
            alt="Cakes Image"
          />
          <Link
            to="/All_Background_Component/cake.html"
            className="pizza-button"
          >
            Cakes
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
            alt="North Indian Image"
          />
          <Link
            to="/All_Background_Component/northindian.html"
            className="pizza-button"
          >
            North Indian
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            alt="Chicken Image"
          />
          <Link
            to="/All_Background_Component/chicken.html"
            className="pizza-button"
          >
            Chicken
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
            alt="Momos Image"
          />
          <Link
            to="/All_Background_Component/momos.html"
            className="pizza-button"
          >
            Momos
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
            alt="Rolls Image"
          />
          <Link
            to="/All_Background_Component/rolls.html"
            className="pizza-button"
          >
            Rolls
          </Link>
        </div>
        <div className="box">
          <img
            src="https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
            alt="Paneer Image"
          />
          <Link
            to="/All_Background_Component/paneer.html"
            className="pizza-button"
          >
            Paneer
          </Link>
        </div>
      </div>

      <section id="gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery_container">
          <div className="photo">
            <img src={img0} alt="Image 1" />
          </div>
          <div className="photo">
            <img src={img1} alt="Image 2" />
          </div>
          <div className="photo">
            <img src={img2} alt="Image 3" />
          </div>
          <div className="photo">
            <img src={img3} alt="Image 4" />
          </div>
          <div className="photo">
            <img src={img4} alt="Image 5" />
          </div>
          <div className="photo">
            <img src={img5} alt="Image 7" />
          </div>
          <div className="photo">
            <img src={img6} alt="Image 7" />
          </div>
          <div className="photo">
            <img src={img7} alt="Image 8" />
          </div>
        </div>
      </section>

      <section className="chef">
        <img src={img8} alt="Chef Image" />
        <div className="chef-text">
          <h2 id="chef-title">Meet Our Chef Group</h2>
          <p>
            Chef Antoine Leclerc, a master of French cuisine with over 20 years
            of experience, combines tradition and innovation to bring you
            exceptional dishes.
          </p>
          <Link className="btn" to="/All_Background_Component/about-chef.html">
            Read more about us
          </Link>
        </div>
      </section>

      <section className="guests">
        <h2>What Our Guests Say</h2>
        <div className="testimonials">
          <div className="guest_box">
            “The food here feels like home. Warm, rich, and flavorful!”
            <h4>- Aditya G.</h4>
          </div>
          <div className="guest_box">
            “Best coffee in town with an amazing atmosphere.”
            <h4>- Rahul G.</h4>
          </div>
          <div className="guest_box">
            “A place I always come back to, simply wonderful.”
            <h4>- Suresh L.</h4>
          </div>
        </div>
      </section>

      <section className="reservation">
        <h2>Reserve Your Table</h2>
        <form onSubmit={handleReservationSubmit}>
          <input type="text" placeholder="Your Name" required value={reservation.name} onChange={(e) => setReservation({...reservation, name: e.target.value})} />
          <input type="email" placeholder="Your Email" required value={reservation.email} onChange={(e) => setReservation({...reservation, email: e.target.value})} />
          <input type="number" placeholder="Number of Guests" required value={reservation.guests} onChange={(e) => setReservation({...reservation, guests: e.target.value})} />
          <textarea placeholder="Special Request" rows="4" value={reservation.request} onChange={(e) => setReservation({...reservation, request: e.target.value})}></textarea>
          <button type="submit">Book Now</button>
        </form>
      </section>

      <footer>&copy; Aditya Restro. All rights reserved. Made With ❤️</footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All_Background_Component/about.html" element={<About />} />
      <Route
        path="/All_Background_Component/about-chef.html"
        element={<Aboutchef />}
      />
      <Route
        path="/All_Background_Component/biryani.html"
        element={<Biryani />}
      />
      <Route
        path="/All_Background_Component/burger.html"
        element={<Burger />}
      />
      <Route path="/All_Background_Component/cake.html" element={<Cake />} />
      <Route path="/All_Background_Component/cart.html" element={<Cart />} />
      <Route
        path="/All_Background_Component/chicken.html"
        element={<Chicken />}
      />
      <Route
        path="/All_Background_Component/contactsection.html"
        element={<Contactsection />}
      />
      <Route path="/All_Background_Component/Event.html" element={<Event />} />
      <Route
        path="/All_Background_Component/gallery.html"
        element={<Gallery />}
      />
      <Route path="/All_Background_Component/log-in.html" element={<Login />} />
      <Route path="/All_Background_Component/Menu.html" element={<Menu />} />
      <Route path="/All_Background_Component/momos.html" element={<Momos />} />
      <Route
        path="/All_Background_Component/northindian.html"
        element={<Northindian />}
      />
      <Route
        path="/All_Background_Component/paneer.html"
        element={<Paneer />}
      />
      <Route path="/All_Background_Component/pizza.html" element={<Pizza />} />
      <Route
        path="/All_Background_Component/Reservation.html"
        element={<Reservation />}
      />
      <Route path="/All_Background_Component/rolls.html" element={<Rolls />} />
      <Route
        path="/All_Background_Component/singup.html"
        element={<Singup />}
      />
      <Route
        path="/All_Background_Component/orders.html"
        element={<Orders />}
      />
      <Route
        path="/All_Background_Component/admin.html"
        element={<AdminPage />}
      />
    </Routes>
  );
}

export default App;
