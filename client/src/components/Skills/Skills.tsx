import React, { FC } from "react";
import { motion } from "motion/react";

interface SkillsProps {}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Badge = ({ label }: { label: string }) => (
  <span
    className="px-3 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-600 hover:text-white transition-all duration-200 cursor-default whitespace-nowrap"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {label}
  </span>
);

const SkillIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative group flex items-center justify-center p-2 rounded-lg hover:bg-neutral-800/60 transition-colors duration-200 cursor-default">
    <img
      src={src}
      alt={alt}
      className="h-7 w-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
    />
    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap border border-neutral-700">
      {alt}
    </span>
  </div>
);

const skillCategories = [
  {
    label: "Robotics & Simulation",
    description: "Building and testing robotic systems in simulation and on hardware.",
    content: (
      <div className="flex flex-wrap gap-2 mt-5">
        <Badge label="ROS 2" />
        <Badge label="Isaac Lab" />
        <Badge label="Isaac Sim" />
        <Badge label="MuJoCo" />
        <Badge label="Isaac Gym" />
      </div>
    ),
  },
  {
    label: "Languages",
    description: "Programming languages used across robotics, systems, and web.",
    content: (
      <div className="flex flex-wrap gap-0.5 mt-5">
        <SkillIcon src="/images/python.svg" alt="Python" />
        <SkillIcon src="/images/cplusplus.svg" alt="C++" />
        <SkillIcon src="/images/java.svg" alt="Java" />
        <SkillIcon src="/images/javascript.svg" alt="JavaScript" />
        <SkillIcon src="/images/c--4.svg" alt="C#" />
      </div>
    ),
  },
  {
    label: "Tools & Frameworks",
    description: "ML, game development, and developer tooling.",
    content: (
      <div className="flex flex-wrap gap-0.5 mt-5">
        <SkillIcon src="/images/pytorch.svg" alt="PyTorch" />
        <SkillIcon src="/images/unity-69.svg" alt="Unity" />
        <SkillIcon src="/images/linux.svg" alt="Linux" />
        <SkillIcon src="/images/git.svg" alt="Git" />
        <SkillIcon src="/images/blender.svg" alt="Blender" />
      </div>
    ),
  },
];

const Skills: FC<SkillsProps> = () => {
  return (
    <section className="mt-32 w-[60%] mx-auto">
      <motion.div {...fadeUp}>
        <div className="flex items-center gap-5 mb-12">
          <p
            className="text-xs uppercase tracking-[0.35em] text-neutral-500 shrink-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tech Stack
          </p>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-6 bg-[rgb(17,17,17)] hover:bg-neutral-900/50 transition-colors duration-300">
              <p
                className="text-white text-sm font-medium"
                style={{ fontFamily: '"Merriweather", serif' }}
              >
                {cat.label}
              </p>
              <p
                className="text-neutral-600 text-xs mt-1.5 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cat.description}
              </p>
              {cat.content}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
