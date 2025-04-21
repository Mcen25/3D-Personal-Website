import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const DGA = () => {
  return (
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
          src="./ThumbnailImage.png"
          alt="DGA Thumbnail"
          className="mt-8 w-[60%] object-contain rounded-2xl"
        />

        <div className="mt-20 w-[60%] flex">
          <div className="w-[70%] items-start">
            <p className="text-white text-left leading-relaxed tracking-wide">
              Don't Go Alone is a multiplayer game that utilizes Pixelization,
              Fishnet peer-to-peer networking, and Unity 3D-engine. The game
              allows players to connect with each other and explore a virtual
              world together, enhancing the gaming experience through
              collaboration and interaction.
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
                <p className="text-white">July 2024 - Present</p>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col ml-auto w-[30%]">
            <img
              src="./DGA2.gif"
              className="h-60 w-full object-cover scale-120 rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>

          
        </div>
      </div>

      

      <Footer />
    </div>
  );
};

export default DGA;