import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  FlyControls,
  Html,
  Loader,
  PointerLockControls,
} from "@react-three/drei";

import Experiment from ".//Experiment";


function CameraOp() {
  useFrame((state) => {
    if(state.camera.position.y > 3) {
      state.camera.position.y = 3
    }
    if(state.camera.position.y < 3) {
      state.camera.position.y = 3
    }
  })
  return null;
}


export default function Index() {

  return (
    <Canvas
      
      concurrent
      gl={{ alpha: true }}
      camera={{ position: [20, 3, -20], fov: 60 }}
      shadowMap
      style={{ height: "100vh", width: "100vw", top: 0, left: 0 }}
      colorManagement
      
    >
      
      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        <directionalLight
          intensity={1}
          position={[0, 100, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight
          position={[0, 7.83, -20.44]}
          rotation={[0.63, -1.16, 0.01]}
          intensity={0.2}
          penumbra={0.15}
          decay={2}
          castShadow
        />
        <spotLight
          position={[14.13, 6.11, -21.14]}
          rotation={[0.63, -1.16, 0.01]}
          intensity={0.5}
          penumbra={0.15}
          decay={2}
          castShadow
        />
        <spotLight
          position={[22.41, 6.11, -21.14]}
          rotation={[0.63, -1.16, 0.01]}
          intensity={0.5}
          penumbra={1}
          decay={2}
          castShadow
        />
        <spotLight
          position={[36.43, 7.83, -20.44]}
          rotation={[0.63, -1.16, 0.01]}
          intensity={1}
          penumbra={0.15}
          decay={2}
          castShadow
        />

        <PointerLockControls />
        <Experiment />

        <FlyControls movementSpeed={10} />
        <CameraOp/>
      </Suspense>

    </Canvas>
  );
}
