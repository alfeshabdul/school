// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: nvschool@gmail.com</p>
            <p>Phone: 1110 </p>
          </div>
          <div className="col-md-6">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a className="text-white" href="/">Home</a></li>
              <li><a className="text-white" href="/about">About</a></li>
              <li><a className="text-white" href="/education">Education</a></li>
              <li><a className="text-white" href="/projects">Projects</a></li>
              <li><a className="text-white" href="/apply">Apply</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <p>&copy; 2023 My School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
