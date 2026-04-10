
import React from 'react';

export default function Aboutchef() {
  return (
    <div className="aboutchef-page">
      <style dangerouslySetInnerHTML={{ __html: `@charset "UTF-8";
.aboutchef-page {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff3e6;
  color: #5a2e1c;
  line-height: 1.6;
}
.aboutchef-page header {
  background: #a05d43;
  color: #fff3e6;
  text-align: center;
  padding: 20px;
  font-size: 24px;
}
.aboutchef-page section {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
}
.aboutchef-page h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 3px solid rgba(148, 74, 45, 0.3333333333);
  display: inline-block;
  padding-bottom: 8px;
}
.aboutchef-page .chef-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.aboutchef-page .chef-group img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  flex: 1;
}
.aboutchef-page .chef-info {
  flex: 1;
  min-width: 280px;
}
.aboutchef-page .chef-info p {
  margin-bottom: 15px;
  font-size: 1rem;
}
.aboutchef-page button {
  background: #944a2d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;
}
.aboutchef-page button:hover {
  background: #722f1a;
}
.aboutchef-page {
  /* 📱 Responsive Styles */
}
@media (max-width: 992px) {
  .aboutchef-page section {
    padding: 15px;
  }
  .aboutchef-page h2 {
    font-size: 1.8rem;
  }
  .aboutchef-page .chef-group {
    flex-direction: column;
    text-align: center;
  }
  .aboutchef-page .chef-info {
    margin-top: 20px;
  }
}
@media (max-width: 600px) {
  .aboutchef-page header {
    font-size: 20px;
    padding: 15px;
  }
  .aboutchef-page h2 {
    font-size: 1.5rem;
  }
  .aboutchef-page .chef-info p {
    font-size: 0.95rem;
  }
  .aboutchef-page button {
    width: 100%;
  }
}` }} />
      

  <header>
    Meet Our Chef Group
  </header>

  <section>
    <h2>About Our Chefs</h2>
    <div className="chef-group">
      <img src="https://cookler.com/wp-content/uploads/2024/02/Best-Chef-In-The-World.webp" alt="Our Chefs" />
      <div className="chef-info">
        <p>
          At Aditya Restaurant, our culinary team is led by <strong>Chef Antoine Leclerc</strong>, a master of French cuisine with over 20 years of experience. 
          Together with his talented chef group, they blend tradition and modern techniques to craft exceptional dishes that delight every guest.
        </p>
        <p>
          Our chefs come from diverse backgrounds, bringing authentic flavors from France, Italy, and India, ensuring every plate tells a story of culture, passion, and creativity.
        </p>
        <p>
          With a commitment to fresh ingredients and artistic presentation, our chef group transforms every meal into an unforgettable dining experience.
        </p>
        <button onClick={() => {}}>⬅ Back to Home</button>
      </div>
    </div>
  </section>


    </div>
  );
}

