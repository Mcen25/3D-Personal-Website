import React, { FC } from 'react';
import './Footer.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer">
    <div className="footer-container">
      <div className="footer-inner">
        Footer Component
      </div>
    </div>
  </div>
);

export default Footer;