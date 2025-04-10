import React, { FC } from "react";
import FastMarquee from "react-fast-marquee";
import "./Skills.css";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center text-neutral-200">
      <div className="w-[80%] flex flex-col">
        <FastMarquee gradient={true} gradientColor="rgb(17,17,17)" gradientWidth={200} speed={30}>
          <img src="/images/java.svg" alt="Java" className="h-25 mx-8" />
          <img src="/images/javascript.svg" alt="JavaScript" className="h-25 mx-8" />
          <img src="/images/typescript.svg" alt="TypeScript" className="h-25 mx-8" />
          <img src="/images/python.svg" alt="Python" className="h-25 mx-8" />
          <img src="/images/tensorflow.svg" alt="TensorFlow" className="h-25 mx-8" />

          <img src="/images/react.svg" alt="React" className="h-25 mx-8" />
          {/* <img src="/images/express.svg" alt="Express" className="h-25 mx-8" /> */}
          <img src="/images/node.svg" alt="Node" className="h-25 mx-8" />
          <img src="/images/postgresql.svg" alt="Postgresql" className="h-25 mx-8" />
          <img src="/images/mongodb.svg" alt="MongoDB" className="h-25 mx-8" />
          {/* <img src="/images/azure.svg" alt="Azure" className="h-25 mx-8" /> */}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Skills;
