import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ThreeBox from "./components/ThreeBox/ThreeBox";
import Intro from "./components/Intro/Intro";
import Marquee from "./components/Marquee/Marquee";
import { Analytics } from "@vercel/analytics/react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DGA from "./pages/DGA";
import TamaTask from "./pages/TamaTask";
import ResearchAssistant from "./pages/ResearchAssistant";
import { Spotlight } from "./components/ui/spotlight-new";
import React, { Suspense, lazy } from "react";


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
              <div className=" p-2 max-w-7xl  mx-auto relative z-10 mt-40 w-full pt-20 md:pt-0">
                <Spotlight translateY={-500}/> 
                <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
                  Matthew En <br />
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Robotics Software Engineer. Building humanoid robots.
                </p>
              </div>
              <Intro />
              <Suspense fallback={<div>Loading...</div>}>
                <Skills />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
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
      <Analytics/>
    </Router>
  );
}

export default App;