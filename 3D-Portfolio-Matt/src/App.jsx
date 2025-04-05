import './App.css'

import * as THREE from 'three'
import { useLayoutEffect, useRef, useState } from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ThreeBox from './components/ThreeBox/ThreeBox'

function App() {
  const [count, setCount] = useState(0)
  const [degraded, degrade] = useState(false)

  return (
    <>
      <NavBar />
      <ThreeBox />
      <Footer />
    </>
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
