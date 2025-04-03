import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as THREE from 'three'
import { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF, OrbitControls} from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'

function App() {
  const [count, setCount] = useState(0)
  const [degraded, degrade] = useState(false)

  return (
    <Canvas shadows camera={{fov: 45 }} style={{ width: '100%', height: '100%' }}>
      <OrbitControls />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={0.5} />
      <RoomModel/>
      <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
      </AccumulativeShadows>

      <PerformanceMonitor onDecline={() => degrade(true)} />
      {/* <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
      </Environment> */}
      {/* <CameraRig /> */}
    </Canvas>
  )
}

function RoomModel(props) {
  const { scene, nodes, materials } = useGLTF('/RealisticRoom.glb')
  return <primitive object={scene} {...props} />
}

// function CameraRig({ v = new THREE.Vector3() }) {
//   return useFrame((state) => {
//     const t = state.clock.elapsedTime
//     state.camera.lookAt(0, 0, 0)
//   })
// }

export default App
