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

const SkeletonFrontend = () => (
  <div className="flex justify-center items-center h-full">
    
    <img src="/images/react.svg" alt="React" className="h-10 mx-2" />
    <img src="/images/next-js2.svg" alt="Next.js" className="h-10 mx-2" />
  </div>
);

const SkeletonBackend = () => (
  <div className="flex flex-wrap justify-center items-center h-full">
    <img src="/images/node.svg" alt="Node" className="h-10 mx-2 my-2" />
    <img src="/images/postgresql.svg" alt="Postgresql" className="h-10 mx-2 my-2" />
    <img src="/images/mongodb.svg" alt="MongoDB" className="h-10 mx-2 my-2" />
    <img src="/images/javascript.svg" alt="JavaScript" className="h-10 mx-2 my-2" />
    <img src="/images/typescript.svg" alt="TypeScript" className="h-10 mx-2 my-2" />
    <img src="/images/aws.svg" alt="AWS" className="h-10 mx-2" />
  </div>
);

const SkeletonOtherTools = () => (
  <div className="flex justify-center items-center h-full">
    <img src="/images/java.svg" alt="Java" className="h-10 mx-2" />
    <img src="/images/python.svg" alt="Python" className="h-10 mx-2" />
    <img src="/images/tensorflow.svg" alt="TensorFlow" className="h-10 mx-2" />
    <img src="/images/unity-69.svg" alt="Unity" className="h-10 mx-2" />
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