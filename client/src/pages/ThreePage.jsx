import { onMount, onCleanup, createSignal } from "solid-js";
import { Canvas, useFrame } from "solid-three"; 
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// Import everything from the main package entry point
import {RandomizedLight, PerformanceMonitor, Environment, Lightformers } from "solid-drei";


export default function ThreePage() {
  const [degraded, degrade] = createSignal(false);  
  return (
    <>
      <Canvas shadows camera={{ position: [0, 1, 2], fov: 50 }}>
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ambientLight intensity={0.5} />
        <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>
        
        <PerformanceMonitor onDecline={() => degrade(true)} />

        <RoomModel scale={[1, 1, 1]} />

        <Environment frames={degraded() ? 1 : Infinity} resolution={256} background blur={1}>
          <Lightformers />
        </Environment>
      </Canvas>

      <CameraRig />
    </>
  );
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}

function RoomModel(props) {
  const gltf = GLTFLoader(GLTFLoader, "/assets/Room.glb");
  return <primitive object={gltf.scene} {...props} />;
}