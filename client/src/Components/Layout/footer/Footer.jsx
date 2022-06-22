import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='#'>How it works</Link>
            <Link to='#'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='#'>Contact</Link>
            <Link to='#'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Explore</h2>
            <Link to='#'>Compmay Reviews</Link>
            <Link to='#'>Job Applications</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='#' className='social-logo'>
              NextJob
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>NextJob © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
