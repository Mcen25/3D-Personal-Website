import React, { FC } from "react";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const ResearchAssistant = () => (
  <div>
    <NavBar />
    <div className="flex flex-col items-center justify-start mx-auto min-h-screen">
        <div className="text-left mt-20 w-[60%]">
          <h1>
            <span className="text-2xl font-bold text-white">
              Don't Go Alone – Unity Multiplayer Video Game
            </span>
          </h1>
        </div>
        <img
          src="./daros_small.jpg"
          alt="DGA Thumbnail"
          className="mt-8 w-[60%] object-contain rounded-2xl"
        />

        <div className="mt-20 w-[60%] flex">
          <div className="w-[70%] items-start">
            <p className="text-white text-left leading-relaxed tracking-wide">
            Conducted research in legged robotics in collaboration with graduate researchers, focusing on simulation-based testing and reinforcement learning. Utilized MuJoCo, NVIDIA Isaac Gym, and NVIDIA Isaac Lab to develop, evaluate, and optimize robotic locomotion models and control policies.
            </p>

            <div className="mt-8 w-[70%] flex justify-between mx-auto">
              <div className="w-1/4 text-center">
                <h3 className="text-xl font-bold text-white">Role</h3>
                <p className="text-white">Research Assistant</p>
              </div>
              <div className="w-1/4 text-center">
                <h3 className="text-xl font-bold text-white">Duration</h3>
                <p className="text-white">Feburary 2025 - Present</p>
              </div>
            </div>
            
          </div>
          {/* <div className="flex flex-col ml-auto w-[30%]">
            <img
              src="./DGA2.gif"
              className="h-60 w-full object-cover scale-100 rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div> */}

          
        </div>
      </div>
    <Footer />
  </div>
);

export default ResearchAssistant;
