import React, { FC } from "react";
import "./Intro.css";
import { motion } from "motion/react";

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div>
    <div className="container mx-auto flex justify-between items-start mt-50 w-[60%]">
      <div className="ml-4 text-left">
        <h2
          className="text-white text-base font-medium"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          About
        </h2>
        <p className="mt-2">
          Hi, I'm Matthew En---a computer science graduate from the
          University of Massachusetts Amherst. I'm currently a Robotics
          Software Engineer programming humanoid robots, with a passion for
          robotics and games!
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
            Robotics Software Engineer @AlphaZ - October 2025 - Present
          </p>
          <p className="text-white">
            Research Assistant @DARoS Lab at UMass Amherst - February 2025 - September 2025
          </p>
          <p className="text-white">
            Research Volunteer @SCALAR Lab - December 2024 - February 2025
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
