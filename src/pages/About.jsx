
import React from 'react';
import img0 from '../assets/image_of_project/pexels-fotios-photos-776538.jpg';


export default function About() {
  return (
    <div className="about-page">
      <style dangerouslySetInnerHTML={{ __html: `.about-page .about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: #fff3e6;
}
.about-page #about h2 {
  text-align: center;
  background: #fff3e6;
  color: #944a2d;
}
.about-page .about img {
  max-width: 450px;
  border-radius: 15px;
  margin-top: 10px;
}
.about-page .about-text {
  max-width: 500px;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #944a2d;
}` }} />
      
  <section id="about">
    <h2>About Us</h2>
    <div className="about">
      <img src={img0} alt="" />

      <div className="about-text">
        <p>
          Welcome to Aditya Restaurant<br /><br />


          At Aditya Restaurant, we believe food is more than just a meal — it’s an experience that brings people
          together. Nestled in a warm and welcoming atmosphere, our restaurant is the perfect place for family
          gatherings, friendly hangouts, romantic dinners, and business meetings.<br /><br />

          We specialize in serving fresh, flavorful, and beautifully presented dishes made from high-quality
          ingredients. From traditional favorites to modern delicacies, every item on our menu is crafted with passion
          and attention to detail. Whether you’re craving comforting classics or exploring new flavors, our chefs ensure
          every bite is memorable.<br /><br />

          Our team is dedicated to providing excellent service, making every guest feel at home. We also offer a wide
          selection of refreshing beverages and mouth-watering desserts to complete your dining experience.<br /><br />

          Aditya Restaurant is more than just a place to eat — it’s a space where taste meets tradition, and hospitality
          meets excellence. With a focus on quality, authenticity, and innovation, we aim to create moments you’ll
          cherish long after your meal.<br /><br />

          Come and discover why Aditya Restaurant is loved by food enthusiasts and families alike. Your perfect dining
          experience starts here.
        </p>
      </div>
    </div>
  </section>

    </div>
  );
}

