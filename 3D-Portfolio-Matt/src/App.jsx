import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as THREE from 'three'
import { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'

function App() {
  const [count, setCount] = useState(0)
  const [degraded, degrade] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function RoomModel(props) {

}

function CameraRig() {

}

export default App
