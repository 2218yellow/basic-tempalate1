import React from 'react';
import '/Random App/client/src/CSS/Contact.css';
import Map from './Maps';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Whether you have questions, need assistance, or want to plan your next adventure, we're here to help.</p>
      </header>
      
      <section className="contact-details">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <strong>Phone:</strong> <a href="tel:+123456789">+1 (234) 567-89</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:info@travelagency.com">info@travelagency.com</a>
            </li>
            <li>
              <strong>Address:</strong> 13-19 Carbonode Cell, Alton, Richards Bay, 3900
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form action="mailto:info@travelagency.com" method="post" encType="text/plain">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <br/>

      <section className="contact-map">
        <Map />
      </section>
    </div>
  );
};

export default Contact;
