import React, { FC } from 'react';
import './BentoGrid.css';

interface BentoGridProps {}

const BentoGrid: FC<BentoGridProps> = () => (
  <div className="h-screen w-full flex items-center justify-center p-20">
    <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3">
      <div className="col-span-1 row-span-1 rounded-xl overflow-hidden 
                bg-gradient-to-r from-green-500 to-green-700
                flex justify-center items-center aspect-auto">
        <img src="/Room.png" className="w-full h-full object-cover" />
      </div>

      <div className="col-span-1 row-span-1 rounded-xl 
          bg-gradient-to-r from-green-500 to-green-700
          flex justify-center items-center aspect-auto min-h-[100px]">
      </div>

      <div className="col-span-2 row-span-1 rounded-xl 
          bg-gradient-to-r from-green-500 to-green-700
          flex justify-center items-center aspect-auto min-h-[100px]">
      </div>

      <div className="col-span-2 row-span-1 rounded-xl 
          bg-gradient-to-r from-green-500 to-green-700
          flex justify-center items-center aspect-auto min-h-[100px]">
      </div>
      
    </div>
  </div>
);

export default BentoGrid;