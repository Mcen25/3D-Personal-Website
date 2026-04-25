import React, { FC } from "react";
import FastMarquee from "react-fast-marquee";

interface MarqueeProps {}

const items = [
  "Robotics Software Engineer",
  "ROS 2",
  "Humanoid Robots",
  "Game Developer",
  "Reinforcement Learning",
  "MuJoCo",
  "React",
  "UMass Amherst",
  "Isaac Lab",
];

const Marquee: FC<MarqueeProps> = () => (
  <div className="mt-24 w-[60%] mx-auto overflow-hidden">
    <FastMarquee
      gradient={true}
      gradientColor="rgb(17,17,17)"
      gradientWidth={80}
      speed={22}
    >
      {items.map((text, i) => (
        <span
          key={i}
          className="px-8 text-[10px] uppercase tracking-[0.3em] text-neutral-600"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {text}
          <span className="ml-8 text-neutral-800">·</span>
        </span>
      ))}
    </FastMarquee>
  </div>
);

export default Marquee;
