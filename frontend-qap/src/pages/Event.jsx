
import React from 'react';

export default function Event() {
  return (
    <div className="event-page">
      <style dangerouslySetInnerHTML={{ __html: `.event-page {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #fff3e6;
  color: #944a2d;
}
.event-page section.events {
  padding: 60px 20px;
  text-align: center;
}
.event-page section.events h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  border-bottom: 3px solid rgba(148, 74, 45, 0.3333333333);
  display: inline-block;
  padding-bottom: 8px;
}
.event-page .event-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}
.event-page .event-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(148, 74, 45, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.event-page .event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(148, 74, 45, 0.4);
}
.event-page .event-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.event-page .event-content {
  padding: 20px;
}
.event-page .event-content h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}
.event-page .event-content p {
  font-size: 1rem;
  line-height: 1.6;
}
.event-page .event-date {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 14px;
  background: #944a2d;
  color: #fff3e6;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}` }} />
      

  <section className="events">
    <h2>Upcoming Events</h2>
    <div className="event-container">

      <div className="event-card">
        <img src="https://www.shoutlo.com/uploads/articles/header-img-top-5-live-music-places-in-chandigarh2.jpg" alt="Live Music Night" />
        <div className="event-content">
          <h3>Live Music Night</h3>
          <p>Join us for an evening filled with soulful live music and delicious food at Aditya Restaurant.</p>
          <span className="event-date">oct 22, 2025</span>
        </div>
    </div>

      <div className="event-card">
        <img src="https://media.istockphoto.com/id/909208170/photo/friends-toasting-with-wine-and-beer-at-rustic-dinner-party.jpg?s=2048x2048&w=is&k=20&c=KHTZ6TWioXSREptGmdb-CqArZ4SDri9U8AdD9op4yW0=" alt="Wine & Dine Evening" />
        <div className="event-content">
          <h3>Wine & Dine Evening</h3>
          <p>A fine dining experience with curated wines paired perfectly with gourmet dishes.</p>
          <span className="event-date">Oct 25, 2025</span>
        </div>
      </div>

    </div>
  </section>


    </div>
  );
}

