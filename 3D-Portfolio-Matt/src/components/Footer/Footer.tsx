import React, { FC } from 'react';
import './Footer.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer">
    <div className="footer-container mt-8">
      <div className="footer-inner flex flex-col md:flex-row justify-between items-start">
        <div className="footer-section text-left mb-4 md:mb-0">
        </div>
        
        <div className="footer-section text-left mb-4 md:mb-0">
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Email: matthew.en.c@gmail.com</p>
        </div>
        
        <div className="footer-section text-left">
          <h3 className="font-bold mb-2">Connect</h3>
          <div className="social-links flex flex-col">
            <a href="#" className="mb-2">LinkedIn</a>
            <a href="#" className="mb-2">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-section text-left">
        </div>
      </div>
    </div>
  </div>
);

export default Footer;