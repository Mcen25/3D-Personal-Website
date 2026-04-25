import React, { FC } from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mt-32 mb-12 w-[60%] mx-auto"
  >
    <div className="h-px bg-neutral-800 mb-10" />

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <p
          className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-2"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Get in touch
        </p>
        <a
          href="mailto:matthew.en.c@gmail.com"
          className="text-neutral-300 text-sm hover:text-white transition-colors duration-200"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          matthew.en.c@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/matthewen25/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-white transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/Mcen25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </div>

    <p
      className="text-neutral-700 text-xs mt-10"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      © 2025 Matthew En
    </p>
  </motion.footer>
);

export default Footer;
