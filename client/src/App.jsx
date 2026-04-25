import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Marquee from "./components/Marquee/Marquee";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DGA from "./pages/DGA";
import TamaTask from "./pages/TamaTask";
import ResearchAssistant from "./pages/ResearchAssistant";
import { Spotlight } from "./components/ui/spotlight-new";
import React, { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function App() {
  const BentoGrid = lazy(() => import("./components/BentoGrid/BentoGrid.jsx"));
  const Skills = lazy(() => import("./components/Skills/Skills.tsx"));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />

              {/* Hero */}
              <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
                <Spotlight translateY={-400} />
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center z-10 max-w-2xl mx-auto"
                >
                  <h1
                    className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
                    style={{ fontFamily: '"Merriweather", serif' }}
                  >
                    Matthew En
                  </h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="mb-10 space-y-2"
                  >
                    <p
                      className="text-neutral-300 text-sm tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Robotics Software Engineer
                      <span className="mx-2.5 text-neutral-600">·</span>
                      AlphaZ
                    </p>
                    <p
                      className="text-neutral-600 text-xs tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      University of Massachusetts Amherst, CS
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    <a
                      href="https://drive.google.com/file/d/1bGAZaxwbU8rJdrAvpDVY2GrapyDWh-Bd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 border border-neutral-800 hover:border-neutral-600 px-5 py-2.5 rounded-full"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      View Resume
                      <ArrowUpRight size={14} />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Scroll line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                  <div className="w-px h-14 bg-gradient-to-b from-transparent to-neutral-700" />
                </motion.div>
              </div>

              <Intro />
              <Marquee />

              <Suspense fallback={<div className="h-96" />}>
                <Skills />
              </Suspense>

              <Suspense fallback={<div className="h-96" />}>
                <BentoGrid />
              </Suspense>

              <Footer />
            </>
          }
        />
        <Route path="/dga" element={<DGA />} />
        <Route path="/tamabits" element={<TamaTask />} />
        <Route path="/ResearchAssistant" element={<ResearchAssistant />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
