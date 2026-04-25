import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

const meta = [
  { label: "Role", value: "Research Assistant" },
  { label: "Advisor", value: "DARoS Lab, UMass Amherst" },
  { label: "Duration", value: "Feb 2025 – Sep 2025" },
  {
    label: "Tech",
    icons: [
      { src: "/images/python.svg", alt: "Python" },
      { src: "/images/pytorch.svg", alt: "PyTorch" },
    ],
    badges: ["MuJoCo", "Isaac Lab", "Isaac Gym"],
  },
];

const ResearchAssistant = () => (
  <div>
    <NavBar />
    <div className="w-[60%] mx-auto pt-28 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-neutral-500 text-xs hover:text-white transition-colors duration-200 mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <ChevronLeft size={13} />
          All Projects
        </Link>

        {/* Header */}
        <p
          className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-3 text-left"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Robotics Research · 2025
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10 text-left"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          Legged Robotics Research
        </h1>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800">
          <img
            src="./daros_small.jpg"
            alt="DARoS Lab"
            className="w-full object-cover max-h-[480px]"
          />
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-14">

          {/* Description */}
          <div className="text-left">
            <p
              className="text-neutral-400 text-sm leading-[1.9]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Conducted research in legged robotics in collaboration with
              graduate researchers at the DARoS Lab, University of Massachusetts
              Amherst. Work focused on simulation-based testing and reinforcement
              learning for robotic locomotion — utilizing MuJoCo, NVIDIA Isaac
              Gym, and NVIDIA Isaac Lab to develop, evaluate, and optimize
              control policies for legged robotic systems.
            </p>
          </div>

          {/* Sidebar metadata */}
          <div className="flex flex-col gap-6 text-left">
            {meta.map((item, i) => (
              <div key={i}>
                {i > 0 && <div className="h-px bg-neutral-800 mb-6" />}
                <p
                  className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </p>
                {item.icons ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {item.icons.map((icon, j) => (
                        <img
                          key={j}
                          src={icon.src}
                          alt={icon.alt}
                          className="h-5 w-5 object-contain opacity-50 hover:opacity-100 transition-opacity"
                          title={icon.alt}
                        />
                      ))}
                    </div>
                    {item.badges && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.badges.map((badge, j) => (
                          <span
                            key={j}
                            className="px-2 py-0.5 text-[10px] text-neutral-500 border border-neutral-800 rounded-full"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p
                    className="text-white text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default ResearchAssistant;
