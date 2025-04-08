import React, { FC } from 'react';
import FastMarquee from 'react-fast-marquee';
import './Marquee.css';

interface MarqueeProps {}

const Marquee: FC<MarqueeProps> = () => (
  <div className="w-full mt-10 flex flex-col justify-center items-center text-neutral-200">
    <div className="w-[70%] flex flex-col">
      <FastMarquee gradient={false} speed={20}>
        <span className="px-6 marquee-text">Research Assistant</span>
        <span className="px-6 marquee-text">Robotics</span>
        <span className="px-6 marquee-text">Game Developer</span>
        <span className="px-6 marquee-text">React</span>

        <span className="px-6 marquee-text">Bachelors in CS</span>
        <span className="px-6 marquee-text">Robotics</span>
        <span className="px-6 marquee-text">Game Developer</span>
        <span className="px-6 marquee-text">React</span>

        <span className="px-6 marquee-text">Research Assistant</span>
        <span className="px-6 marquee-text">Robotics</span>
        <span className="px-6 marquee-text">Game Developer</span>
        <span className="px-6 marquee-text">React</span>
      </FastMarquee>
    </div>
  </div>
);

export default Marquee;