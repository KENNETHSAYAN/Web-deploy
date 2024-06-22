import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#blog" className="nav-link">Blog</a>
            <Link to="/login" className="nav-link">Login</Link>
          <div className="nav-contact">
            <span>Call Us: (123) 456-7890</span>
          </div>
          </div>
        </div>
      </nav>

      <section id="home" className="home-section">
        <div className="home-content">
          <h1>Welcome to Edukada</h1>
          <p>Your gateway to a brighter future.</p>
        </div>
      </section>

      <section className="search-section">
        <h2>Find Your Course</h2>
        <div className="search-container">
          <input type="text" placeholder="Search for courses..." className="search-bar" />
          <button className="search-button">Search</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>At Edukada, we are committed to providing top-quality education and resources to help you achieve your dreams. With a team of dedicated professionals and experts in various fields, we strive to create an inclusive learning environment where students can thrive and reach their full potential. Whether you're looking to acquire new skills, advance in your career, or explore new interests, Edukada is here to support you every step of the way. Join us on this journey towards lifelong learning and personal growth.</p>
      </section>

      <section id="courses" className="courses-section">
        <h2>Our Courses</h2>
        <div className="courses-list">
          <div className="course-item">
            <h3>Course 1</h3>
            <p>Learn the basics of programming.</p>
          </div>
          <div className="course-item">
            <h3>Course 2</h3>
            <p>Advanced topics in web development.</p>
          </div>
        </div>
        <div className="view-courses-link">
          <Link to="/courses">View Courses</Link>
        </div>
      </section>

      <section id="categories" className="categories-section">
        <h2>All Categories</h2>
        <div className="categories-list">
          <div className="category-item">Mathematics</div>
          <div className="category-item">Science</div>
          <div className="category-item">History</div>
          <div className="category-item">English</div>
        </div>
      </section>

      <section id="blog" className="blog-section">
        <h2>Blog</h2>
        <p>Stay updated with the latest news and articles in education.</p>
        <div className="blog-list">
          <div className="blog-item">
            <h3>Blog Post 1</h3>
            <p>Introduction to online learning.</p>
          </div>
          <div className="blog-item">
            <h3>Blog Post 2</h3>
            <p>Tips for effective study habits.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us at (123) 456-7890 or email us at info@edukada.com.</p>
        <div className="location">
          <h3>Our Location</h3>
          <p>Cagayan de Oro City, Kauswagan 9000 </p>
          <div className="map-container">
            <iframe
              title="Cagayan de Oro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.233842857476!2d124.63189391517893!3d8.479935593873614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8fd9ff3e0adf%3A0x7c6bfb2071b2deab!2sKauswagan%2C%20Cagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1593706473965!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Edukada. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
