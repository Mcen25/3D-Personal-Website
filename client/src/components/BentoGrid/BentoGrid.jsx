import React from 'react';
import { Link } from 'react-router-dom';
import './BentoGrid.css';
import { CardContainer, CardBody } from '@/components/ui/3d-card';
import { motion } from "motion/react"

const cardMotionProps = {
  initial: { opacity: 0, translateY: 50 },
  whileInView: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.5 }
}

const BentoGrid = () => (
  <div className="w-full flex items-center justify-center p-50 mt-20">
    <div className="grid h-full w-full grid-cols-3 auto-rows-auto gap-3">

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <Link to="/dga">
            <CardBody className="rounded-xl overflow-hidden flex justify-center items-center">
              <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
            </CardBody>
          </Link>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-1 row-span-1">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/nyan-cat.gif" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div {...cardMotionProps}>
        <CardContainer className="col-span-2 row-span-2">
          <CardBody className="rounded-xl overflow-hidden flex justify-center items-center aspect-auto">
            <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  </div>
);

export default BentoGrid;