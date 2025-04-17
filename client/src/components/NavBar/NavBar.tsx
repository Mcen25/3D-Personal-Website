import React from "react";
import { FC } from "react";


interface NavBarProps {}


const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgb(17,17,17)]/75 py-3">
      <div className="w-[60%] mx-auto border-b-2 border-gray-500">
        <div className="container mx-auto flex justify-between items-center py-3">
          <div className="flex-1 text-left ml-4">
            <h2
              className="text-white text-base font-medium"
              style={{ fontFamily: '"Merriweather", serif' }}
            >
              Matthew En
            </h2>
          </div>

          <div className="flex-none">
            <a
              href="/"
              className="text-white text-base px-3 font-medium hover:text-gray-300"
              style={{ fontFamily: '"Merriweather", serif' }}
            >
              Projects
            </a>
          </div>

          <div className="flex-1 text-right mr-4">
            <a
              href="https://drive.google.com/file/d/1ltXc6CbdqCk--ctWWygkw-YYVQXiEgKP/view?usp=sharing"
              className="text-white text-base px-3 font-medium hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: '"Merriweather", serif' }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;