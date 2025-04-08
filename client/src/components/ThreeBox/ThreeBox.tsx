import React, { FC } from 'react';
import './ThreeBox.css';

import { Canvas, applyProps, useFrame } from '@react-three/fiber';
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF, OrbitControls } from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina';

interface ThreeBoxProps {}

const ThreeBox: FC<ThreeBoxProps> = () => (
  <div className="ThreeBox">
    <div className="w-100 h-71 flex flex-col justify-center items-center border-2 border-white rounded-2xl p-1 mt-50 mx-auto">
      <img className="filter blur-sm" src="./Room.png" alt="Room" />
      <div className="absolute inset-0 flex items-center justify-center mt-50">
        <button className="bg-white text-black border border-white rounded px-4 py-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default ThreeBox;