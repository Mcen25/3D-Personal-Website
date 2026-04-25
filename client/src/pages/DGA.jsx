import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

const meta = [
  { label: "Role", value: "Lead Programmer" },
  { label: "Collaborators", value: "Steven Lam" },
  { label: "Duration", value: "July 2024 – Present" },
  {
    label: "Tech",
    icons: [
      { src: "/images/unity-69.svg", alt: "Unity" },
      { src: "/images/steam-icon-logo.svg", alt: "Steam" },
      { src: "/images/c--4.svg", alt: "C#" },
    ],
  },
];

const DGA = () => (
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
          Game Development · 2024
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10 text-left"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          Don't Go Alone
        </h1>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800">
          <img
            src="./ThumbnailImage.png"
            alt="Don't Go Alone"
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-14">

          {/* Description + GIF */}
          <div className="text-left">
            <p
              className="text-neutral-400 text-sm leading-[1.9]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Don't Go Alone is a multiplayer game that utilizes Pixelization,
              Fishnet peer-to-peer networking, and the Unity 3D engine. Players
              can connect with each other and explore a virtual world together,
              enhancing the gaming experience through collaboration and
              real-time interaction.
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-800">
              <img src="./DGA2.gif" alt="Gameplay preview" className="w-full" />
            </div>
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
                  <div className="flex items-center gap-3 mt-1">
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

export default DGA;
