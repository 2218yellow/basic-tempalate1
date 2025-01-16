import React from 'react';
import '/Random App/client/src/CSS/About.css'

const About = () => {
  return (
    <div className="about-container">
      <hearder className = "about-header">
      <h1>About Us</h1>
      <p>Welcome to our company! We are dedicated to delivering the best service to our customers. Our team is comprised of talented professionals who are passionate about their work.</p>
      </hearder>

      <div className="about-section">
        <img src="./src/img/Team.jpg" alt="Our Team" className="about-image" />
        <div className="about-text">
          <h2>Our Team</h2>
          <p>We have a diverse and experienced team that works collaboratively to achieve our goals. Our team members bring a wealth of knowledge and expertise to the table, making us a strong and dynamic organization.</p>
        </div>
      </div>
      <br/>


      <div className="about-section">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>Our mission is to innovate and lead in our industry. We strive to exceed expectations and deliver exceptional value to our customers. We believe in continuous improvement and are always looking for ways to enhance our products and services.</p>
        </div>
        <img src="./src/img/mission2.jpg" alt="Our Mission" className="about-image" />
      </div>
      <br/>

      <div className="about-section">
        <img src="./src/img/vision.jpg" alt="Our Vision" className="about-image" />
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>We envision a future where our company is recognized as a leader in innovation and customer satisfaction. Our vision drives us to push boundaries and set new standards in our industry.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
