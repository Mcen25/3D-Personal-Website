import React, { FC } from "react";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const TamaTask = () => (
  <div>
    <NavBar />
    <div className="flex flex-col items-center justify-start mx-auto min-h-screen">
        <div className="text-left mt-20 w-[60%]">
          <h1>
            <span className="text-2xl font-bold text-white">
              TamaBits – IOS and WebApp
            </span>
          </h1>
        </div>
        <img
          src="./TamaBits.png"
          alt="DGA Thumbnail"
          className="mt-8 w-[60%] object-contain rounded-2xl"
        />

        <div className="mt-20 w-[60%] flex">
          <div className="w-[70%] items-start">
          <p className="text-white text-left leading-relaxed tracking-wide">
            TamaTask is a cross-platform habit tracking app designed to help you build better routines and stay motivated. Effortlessly log your daily habits, visualize your progress with intuitive charts, and stay engaged with our unique Tamagotchi-inspired virtual pet, built in Unity. As you maintain your habits, your digital companion grows and thrives.
          </p>

            <div className="mt-8 w-[70%] flex justify-between mx-auto">
              <div className="w-1/4 text-center">
                <h3 className="text-xl font-bold text-white">Role</h3>
                <p className="text-white">Lead Programmer</p>
              </div>
              <div className="w-1/4 text-center">
                <h3 className="text-xl font-bold text-white">Collaborators</h3>
                <p className="text-white">Steven Lam</p>
              </div>
              <div className="w-1/4 text-center">
                <h3 className="text-xl font-bold text-white">Duration</h3>
                <p className="text-white">April 2025 - Present</p>
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

export default TamaTask;
