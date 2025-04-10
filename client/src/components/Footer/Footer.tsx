import React, { FC } from "react";
import "./Footer.css";
import { Github, Linkedin } from "lucide-react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer rounded-lg">
    <div className="footer-container mt-8 mx-4 border border-white rounded-lg pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="footer-section text-left mb-4 md:mb-0"></div>

        <div className="footer-section text-left mb-4 md:mb-0">
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Email: matthew.en.c@gmail.com</p>
        </div>

        <div className="footer-section text-left">
          <h3 className="font-bold mb-2">Connect</h3>
          <div className="social-links flex flex-col">
            <a
              href="https://www.linkedin.com/in/matthewen25/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Mcen25"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="footer-section text-left"></div>
      </div>
    </div>
  </div>
);

export default Footer;
