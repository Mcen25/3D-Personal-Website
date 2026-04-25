import React from "react";
import { FC } from "react";
import { motion } from "motion/react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[rgb(17,17,17)]/70 border-b border-white/[0.05]"
    >
      <div className="w-[60%] mx-auto flex items-center justify-between py-4">
        <a
          href="/"
          className="text-white text-sm font-medium hover:text-neutral-400 transition-colors duration-200 tracking-wide"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          Matthew En
        </a>

        <nav className="flex items-center gap-7" style={{ fontFamily: "Inter, sans-serif" }}>
          <a
            href="#about"
            className="text-neutral-500 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="text-neutral-500 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="https://drive.google.com/file/d/1bGAZaxwbU8rJdrAvpDVY2GrapyDWh-Bd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs border border-neutral-700 hover:border-neutral-500 px-4 py-1.5 rounded-full transition-colors duration-200 tracking-wide"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
