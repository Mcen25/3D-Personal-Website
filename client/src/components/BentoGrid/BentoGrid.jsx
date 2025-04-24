import React from "react";
import { Link } from "react-router-dom";
import "./BentoGrid.css";
import { CardContainer, CardBody, CardItem} from "@/components/ui/3d-card";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const cardMotionProps = {
  initial: { opacity: 0, translateY: 50 },
  whileInView: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 },
};

const BentoGrid = () => (
  <div>
    <div className="mt-50 w-[60%] mx-auto">
      <h1 className="mb-5 text-white text-left">Projects</h1>
      <hr className="border-t-2 border-gray-500" />
    </div>

    <div className="flex items-center justify-center bg-[rgb(17,17,17)] rounded-xl">
      <div className="grid grid-cols-3 auto-rows gap-10">
        <motion.div {...cardMotionProps}>
          
            <CardContainer className="inter-var col-span-1 row-span-1 border-2 border-white rounded-2xl">
              
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-500 dark:text-white text-left"
                  >
                    Don't Go Alone
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
                  >
                    A multiplayer game that utilizes Pixelization, Fishnet peer-to-peer networking, and Unity 3D-engine.
                  </CardItem>
                  <Link to="/dga" className="block">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src="./DGA2.gif"
                          height="1000"
                          width="1000" 
                          className="h-60 w-full object-cover scale-120 group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </div>
                    </CardItem>
                  </Link>
                  

                  <CardItem
                    translateZ="60"
                    className="w-full mt-5"
                  >
                    <div className="flex justify-center items-center">
                      <img src="/images/unity-69.svg" alt="Unity" className="h-10 mx-4" />
                      <img src="/images/steam-icon-logo.svg" alt="Python" className="h-10 mx-4" />
                      <img src="/images/c--4.svg" alt="C#" className="h-10 mx-4" />
                    </div>
                  </CardItem>
                </CardBody>
            </CardContainer>
          
        </motion.div>

        <motion.div {...cardMotionProps}>
          <CardContainer className="inter-var col-span-1 row-span-1 border-2 border-white rounded-2xl">
            
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-500 dark:text-white text-left"
                >
                  Robotics Research Assistant
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
                >
                  Robotics research at the DARoS Lab at the University of Massachusetts Amherst
                </CardItem>
                <Link to="/ResearchAssistant" className="block">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </Link>
                <CardItem translateZ="100" className="w-full mt-4">
                <a
                  href="https://github.com/yourusername/repository" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                <Github size={20} />
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        <motion.div {...cardMotionProps}>
          <CardContainer className="inter-var col-span-1 row-span-1 border-2 border-white rounded-2xl">
            <Link to="/TamaTask" className="block">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white text-left"
                >
                  Tamagotchi IOS/Web Application
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
                >
                  A multiplayer game that utilizes Pixelization, Fishnet peer-to-peer networking, and Unity 3D-engine.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <CardItem
                    translateZ="60"
                    className="w-full mt-5"
                  >
                    <div className="flex justify-center items-center">
                      <img src="/images/aws.svg" alt="AWS" className="h-10 mx-4" />
                      <img src="/images/react.svg" alt="React" className="h-10 mx-4" />
                      <img src="/images/react-native-1.svg" alt="ReactNative" className="h-10 mx-4" />
                      <img src="/images/unity-69.svg" alt="Unity" className="h-10 mx-4" />
                    </div>
                  </CardItem>
              </CardBody>
            </Link>
          </CardContainer>
        </motion.div>
      </div>
    </div>
  </div>
);

export default BentoGrid;
