import React from 'react';
import './BentoGrid.css';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const BentoGrid = () => (
<div className=" w-full flex items-center justify-center p-20">
  <div className="grid h-full w-full grid-cols-3 auto-rows-auto gap-3">
      <CardContainer className="col-span-1 row-span-1">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>

      <CardContainer className="col-span-1 row-span-1">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/nyan-cat.gif" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>

      <CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>

      <CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>

      <CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>
      <CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer><CardContainer className="col-span-2 row-span-2">
        <CardBody className="rounded-xl overflow-hidden 
          flex justify-center items-center aspect-auto">
          <img src="/Room.png" className="w-full h-full object-cover" alt="Room" />
        </CardBody>
      </CardContainer>
    </div>
  </div>
);

export default BentoGrid;