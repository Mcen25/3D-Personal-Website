import React, { FC } from "react";
import { Github, Linkedin } from "lucide-react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className="mt-20 border-t border-white/[0.05] bg-[rgb(17,17,17)]/70 backdrop-blur-xl">
    <div className="w-[60%] mx-auto flex items-center justify-between py-4 text-left">
      <a
        href="/"
        className="text-white text-sm font-medium hover:text-neutral-400 transition-colors duration-200 tracking-wide"
        style={{ fontFamily: '"Merriweather", serif' }}
      >
        Matthew En
      </a>

      <div className="flex items-center gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
        <a
          href="https://www.linkedin.com/in/matthewen25/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Mcen25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="mailto:matthew.en.c@gmail.com"
          className="text-white text-xs border border-neutral-700 hover:border-neutral-500 px-4 py-1.5 rounded-full transition-colors duration-200 tracking-wide"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
