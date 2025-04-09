import React, { FC } from 'react';
import './Intro.css';
import { motion } from "motion/react"

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div className="">

      <div className="container mx-auto flex justify-between items-start mt-50">
        <div className="ml-4 text-left">
          <h2
            className="text-white text-base font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            About
          </h2>
          <p className="mt-2">
            Hi, I'm Matthew En---a newly graduated computer science student at the University of Massachusetts Amherst with a passion of building creative solutions.
          </p>
        </div>
        <div className="ml-4 text-left">
          <h2
            className="text-white text-base font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            Experience
          </h2>
          <div className="space-y-2 mt-2">
            <p className="text-white">
              Research Assistant @DARoS Lab at the University of Massachusetts Amherst - February 2025 - Present
            </p>
            <p className="text-white">
              Undergraduate Research Volunteer - December 2024 - February 2025
            </p>
            <p className="text-white">
              Technical Instructor - June 2024 - August 2024
            </p>
          </div>
        </div>
        <div className="ml-4 text-left">
          <h2
            className="text-white text-base font-medium"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            Skills  
          </h2>  
          <div className="space-y-2 mt-2">
            <h3 className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </div>
      </div>
  </div>
);

export default Intro;