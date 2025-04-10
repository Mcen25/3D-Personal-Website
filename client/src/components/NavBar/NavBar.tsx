import React from "react";
import { FC } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavBarProps {}

const navigation = [
  { name: "Projects", href: "/", current: false },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1ltXc6CbdqCk--ctWWygkw-YYVQXiEgKP/view?usp=sharing",
    current: false,
  },
];

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="NavBar mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-4 text-left">
          <h2
            className="text-white text-base font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            Matthew En
          </h2>
        </div>
        <div className="ml-4">
          <a
            href="/"
            className="text-white text-base px-3 font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            Projects
          </a>
        </div>
        <div className="ml-4 text-right">
          <a
            href="https://drive.google.com/file/d/1ltXc6CbdqCk--ctWWygkw-YYVQXiEgKP/view?usp=sharing"
            className="text-white text-base px-3 font-medium"
            target="_blank"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
