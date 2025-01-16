import React from 'react';
import '/Random App/client/src/CSS/Services.css';

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the world with our tailor-made travel solutions. We provide a range of services to ensure your journey is unforgettable.</p>
      </header>

      <img src="./src/img/Travel.jpg" alt="Travel" className="services-image" />

      <section className="services-section">
        <div className="service">
          <h2>Customized Tour Packages</h2>
          <p>Whether you're seeking adventure, relaxation, or cultural experiences, our customized tour packages are designed to suit your preferences and budget. From solo travel to group tours, we've got you covered.</p>
        </div>
        <div className="service">
          <h2>Flight Bookings</h2>
          <p>We offer competitive prices on flight bookings to destinations around the globe. Our team ensures you get the best deals and seamless travel experience.</p>
        </div>
        <div className="service">
          <h2>Hotel Reservations</h2>
          <p>Find the perfect accommodation with our extensive network of hotels and resorts. We cater to all tastes and budgets, ensuring you have a comfortable stay wherever you go.</p>
        </div>
        <div className="service">
          <h2>Travel Insurance</h2>
          <p>Travel with peace of mind with our comprehensive travel insurance plans. We offer coverage for medical emergencies, trip cancellations, lost luggage, and more.</p>
        </div>
        <div className="service">
          <h2>Car Rentals</h2>
          <p>Explore your destination at your own pace with our car rental services. We provide a variety of vehicles to suit your needs, from compact cars to luxury SUVs.</p>
        </div>
        <div className="service">
          <h2>Visa Assistance</h2>
          <p>Our visa assistance service simplifies the process of obtaining travel visas. We guide you through the application process and help you gather the necessary documents.</p>
        </div>
        <div className="service">
          <h2>Corporate Travel Management</h2>
          <p>Streamline your business trips with our corporate travel management services. We handle everything from flight bookings to hotel reservations, ensuring a smooth and productive journey for your team.</p>
        </div>
        <div className="service">
          <h2>Destination Weddings</h2>
          <p>Make your special day unforgettable with our destination wedding services. We assist with everything from venue selection to travel arrangements, creating the perfect setting for your wedding.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
