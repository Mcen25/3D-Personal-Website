import React, { FC } from 'react';
import './Intro.css';

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div className="">
    {/* <div className="Intro flex flex-row justify-center items-center gap-x-4 md:gap-x-10 lg:gap-x-100 mt-50">
      <div className="text-left">
        <a>About</a>
        <p className="mt-5">
          Testestetsetsetsetset
        </p>
      </div>
      <div className="text-left">
        <p></p>
      </div>
      <div className="text-left">
        <p></p>
      </div>
    </div> */}

    <div className="container mx-auto flex justify-between items-center mt-50">
        <div className="ml-4 text-left">
          <h2
            className="text-white text-base font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            About
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="ml-4">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
        <div className="ml-4 text-right">  
          <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
      </div>
  </div>
);

export default Intro;