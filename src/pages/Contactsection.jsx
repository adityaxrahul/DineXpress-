
import React from 'react';

export default function Contactsection() {
  return (
    <div className="contactsection-page">
      <style dangerouslySetInnerHTML={{ __html: `.contactsection-page {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #fff3e6;
  color: #944a2d;
}
.contactsection-page section.contact {
  padding: 60px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contactsection-page section.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  border-bottom: 3px solid rgba(148, 74, 45, 0.3333333333);
  display: inline-block;
  padding-bottom: 8px;
}
.contactsection-page .contact-info {
  background: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(148, 74, 45, 0.2);
  text-align: left;
  width: 100%;
  max-width: 400px;
}
.contactsection-page .contact-info p {
  margin: 12px 0;
  font-size: 1.1rem;
}
.contactsection-page .contact-info strong {
  color: #722f1a;
}
.contactsection-page {
  /* Responsive */
}
@media (max-width: 500px) {
  .contactsection-page section.contact h2 {
    font-size: 2rem;
  }
  .contactsection-page .contact-info {
    padding: 20px;
  }
  .contactsection-page .contact-info p {
    font-size: 1rem;
  }
}` }} />
      

  <section className="contact">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <p><strong>📍 Address:</strong> Yadopur,Gopalganj,Bihar (841428)</p>
      <p><strong>📞 Phone:</strong> +91 62018 70085</p>
      <p><strong>📧 Email:</strong> Aditya.gupta@adityarestaurant.com</p>
      <p><strong>🕒 Hours:</strong> Mon – Sun: 10 AM – 11 PM</p>
    </div>
  </section>


    </div>
  );
}

