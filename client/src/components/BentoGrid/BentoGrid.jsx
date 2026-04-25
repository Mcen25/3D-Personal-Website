import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const projects = [
  {
    title: "TamaBits",
    description:
      "A web and mobile application dedicated to making better habits.",
    image: "./TamaBits.png",
    link: "/tamabits",
    icons: [
      { src: "/images/unity-69.svg", alt: "Unity" },
      { src: "/images/next-js2.svg", alt: "Next.js" },
      { src: "/images/react.svg", alt: "React" },
      { src: "/images/aws.svg", alt: "AWS" },
      { src: "/images/dynamodb.svg", alt: "DynamoDB" },
    ],
  },
  {
    title: "Don't Go Alone",
    description:
      "A multiplayer game using Pixelization, Fishnet peer-to-peer networking, and Unity 3D.",
    image: "./DGA2.gif",
    link: "/dga",
    icons: [
      { src: "/images/unity-69.svg", alt: "Unity" },
      { src: "/images/steam-icon-logo.svg", alt: "Steam" },
      { src: "/images/c--4.svg", alt: "C#" },
    ],
  },
  {
    title: "Robotics Research",
    description:
      "Robotics research at the DARoS Lab at the University of Massachusetts Amherst.",
    image: "./daros_small.jpg",
    link: "/ResearchAssistant",
    icons: [],
  },
];

const BentoGrid = () => (
  <div>
    <div id="work" className="mt-32 w-[60%] mx-auto">
      <div className="flex items-center gap-5 mb-12">
        <p
          className="text-xs uppercase tracking-[0.35em] text-neutral-500 shrink-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Projects
        </p>
        <div className="flex-1 h-px bg-neutral-800" />
      </div>
    </div>

    <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUp}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <CardContainer className="inter-var w-full">
            <CardBody className="relative group/card bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 w-full rounded-2xl p-5 transition-colors duration-300">
              <div className="flex items-start justify-between mb-2">
                <CardItem
                  translateZ="50"
                  className="text-base font-semibold text-white text-left"
                  style={{ fontFamily: '"Merriweather", serif' }}
                >
                  {project.title}
                </CardItem>
                <Link to={project.link}>
                  <CardItem
                    translateZ="30"
                    className="text-neutral-600 hover:text-white transition-colors duration-200 mt-0.5"
                  >
                    <ArrowUpRight size={16} />
                  </CardItem>
                </Link>
              </div>

              <CardItem
                as="p"
                translateZ="40"
                className="text-neutral-500 text-xs max-w-sm text-left leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {project.description}
              </CardItem>

              <Link to={project.link} className="block">
                <CardItem translateZ="80" className="w-full">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      width="1000"
                      height="1000"
                      className="h-44 w-full object-cover group-hover/card:scale-[1.03] transition-transform duration-500"
                      alt={project.title}
                    />
                  </div>
                </CardItem>
              </Link>

              {project.icons.length > 0 && (
                <CardItem translateZ="30" className="w-full mt-4">
                  <div className="flex items-center gap-3">
                    {project.icons.map((icon, j) => (
                      <img
                        key={j}
                        src={icon.src}
                        alt={icon.alt}
                        className="h-5 w-5 object-contain opacity-40 hover:opacity-80 transition-opacity duration-200"
                        title={icon.alt}
                      />
                    ))}
                  </div>
                </CardItem>
              )}
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  </div>
);

export default BentoGrid;
