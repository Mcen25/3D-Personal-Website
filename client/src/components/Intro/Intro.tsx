import React, { FC } from "react";
import { motion } from "motion/react";

interface IntroProps {}

const experiences = [
  {
    company: "AlphaZ",
    role: "Robotics Software Engineer",
    period: "Oct 2025 – Present",
  },
  {
    company: "DARoS Lab, UMass Amherst",
    role: "Research Assistant",
    period: "Feb 2025 – Sep 2025",
  },
  {
    company: "SCALAR Lab",
    role: "Research Volunteer",
    period: "Dec 2024 – Feb 2025",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Intro: FC<IntroProps> = () => (
  <section id="about" className="w-[60%] mx-auto mt-32 text-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* About */}
      <motion.div {...fadeUp}>
        <p
          className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-5"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          About
        </p>
        <h2
          className="text-white text-xl font-medium mb-4 leading-snug"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          Robotics Software Engineer
        </h2>
        <p
          className="text-neutral-400 text-sm leading-[1.8]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Computer science graduate from the University of Massachusetts
          Amherst. Currently a Robotics Software Engineer programming humanoid
          robots, with a passion for robotics and games.
        </p>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-5"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Experience
        </p>

        <div className="inline-flex flex-col items-start">
          {experiences.map((exp, i) => (
            <div key={i} className="flex items-start gap-4 group">
              {/* Timeline spine */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-400 transition-colors duration-300" />
                {i < experiences.length - 1 && (
                  <div className="w-px min-h-[52px] bg-neutral-800 mt-1.5" />
                )}
              </div>

              {/* Text */}
              <div className="pb-6 text-left">
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-neutral-500 text-xs mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {exp.role}
                </p>
                <p
                  className="text-neutral-700 text-xs mt-0.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default Intro;
