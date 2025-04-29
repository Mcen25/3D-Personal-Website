import React, { FC } from "react";
import FastMarquee from "react-fast-marquee";
import "./Skills.css";
import { motion } from "motion/react";

interface SkillsProps {}

const cardMotionProps = {
  initial: { opacity: 0, translateY: 50 },
  whileInView: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
};

const SkillIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative group flex items-center">
    <img
      src={src}
      alt={alt}
      className="h-10 mx-2 my-1"
    />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-100 text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
      {alt}
    </span>
    <svg
      className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
    >
      <polygon points="8,8 0,0 16,0" fill="#f3f4f6" />
    </svg>
  </div>
);

const SkeletonFrontend = () => (
  <div className="flex justify-center items-center h-full">
    <SkillIcon src="/images/react.svg" alt="React" />
    <SkillIcon src="/images/next-js2.svg" alt="Next.js" />
  </div>
);

const SkeletonBackend = () => (
  <div className="flex flex-wrap justify-center items-center h-full">
    <SkillIcon src="/images/node.svg" alt="Node" />
    <SkillIcon src="/images/postgresql.svg" alt="Postgresql" />
    <SkillIcon src="/images/mongodb.svg" alt="MongoDB" />
    <SkillIcon src="/images/javascript.svg" alt="JavaScript" />
    <SkillIcon src="/images/typescript.svg" alt="TypeScript" />
    <SkillIcon src="/images/aws.svg" alt="AWS" />
  </div>
);

const SkeletonOtherTools = () => (
  <div className="flex justify-center items-center h-full">
    <SkillIcon src="/images/java.svg" alt="Java" />
    <SkillIcon src="/images/python.svg" alt="Python" />
    <SkillIcon src="/images/tensorflow.svg" alt="TensorFlow" />
    <SkillIcon src="/images/unity-69.svg" alt="Unity" />
  </div>
);

const skillsFeatures = [
  {
    title: "Frontend Technology",
    description: "Building responsive and interactive user interfaces.",
    skeleton: <SkeletonFrontend />,
    className: "col-span-1 border-r dark:border-neutral-800",
  },
  {
    title: "Backend Technology",
    description: "Developing robust server-side logic and databases.",
    skeleton: <SkeletonBackend />,
    className: "col-span-1 border-r dark:border-neutral-800",
  },
  {
    title: "Other Tools & Languages",
    description: "Utilizing various tools for development and data science.",
    skeleton: <SkeletonOtherTools />,
    className: "col-span-1",
  },
];

const FeatureCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const combinedClassName = `p-4 sm:p-8 relative overflow-hidden ${className || ''}`;
  return (
    <div className={combinedClassName.trim()}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children: React.ReactNode }) => {
  const combinedClassName = `text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 dark:text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2`;
  return (
    <p className={combinedClassName}>
      {children}
    </p>
  );
};


const Skills: FC<SkillsProps> = () => {
  return (
    <div className="mt-50 justify-center items-center text-neutral-200 w-[60%] mx-auto">
      <h1 className="mb-5 text-left">Tech Stack</h1>
      <hr className="border-t-2 border-gray-500 mb-10"/>
      
      <motion.div {...cardMotionProps}>
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-3 border-2 rounded-md dark:border-neutral-800 bg-[rgb(17,17,17)]">
          {skillsFeatures.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-20 w-full mt-4">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        </div>
      </motion.div>
     
      
    </div>
  );
};

export default Skills;