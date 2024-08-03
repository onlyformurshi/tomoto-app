import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      {/* Footer section */}
      <div className="footer">
        {/* Inner footer section */}
        <div className="inner-footer">
          {/* Company details */}
          <div className="footer-items">
            {/* Company name */}
            <h1>Company Name</h1>
            {/* Company description */}
            <p>
              Description of any product or motto of the company.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-items">
            {/* Heading for quick links */}
            <h3>Quick Links</h3>
            {/* Underline for heading */}
            <div className="border1"></div>
            {/* List of quick links */}
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div className="footer-items">
            {/* Heading for recipes */}
            <h3>Recipes</h3>
            {/* Underline for heading */}
            <div className="border1"></div>
            {/* List of recipes */}
            <ul>
              <li><a href="#">Indian</a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Mexican</a></li>
              <li><a href="#">Italian</a></li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="footer-items">
            {/* Heading for contact details */}
            <h3>Contact us</h3>
            {/* Underline for heading */}
            <div className="border1"></div>
            {/* Contact details */}
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                XYZ, abc
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                123456789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                xyz@gmail.com
              </li>
            </ul>
            {/* Social media links */}
            <div className="social-media">
              <a
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google-plus-square"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="footer-bottom">
          {/* Copyright details */}
          Copyright &copy; murshi 2024.
        </div>
      </div>
    </div>
  );
}

export default Footer;