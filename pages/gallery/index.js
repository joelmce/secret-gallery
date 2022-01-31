import React, { Suspense, useReducer } from "react";
import { Canvas } from "@react-three/fiber";
import {
  FlyControls,
  Html,
  Loader,
  PointerLockControls,
  useCursor,
} from "@react-three/drei";

import Experiment from ".//Experiment";

export default function Index() {
 

  return (
    <Canvas
      concurrent
      gl={{ alpha: true }}
      camera={{ position: [0, 15, 30], fov: 70 }}
      onCreated={({ gl, camera }) => {
        camera.lookAt(0, 0, 0);
      }}
      style={{ height: "100vh", width: "100vw", top: 0, left: 0 }}
    >
      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        <PointerLockControls />
        <Experiment />

        <directionalLight
          intensity={1.38}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <spotLight
            intensity={168.9}
            angle={Math.PI / 8}
            penumbra={0.15}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        <spotLight
            intensity={141.9}
            angle={0.59}
            penumbra={0.2}
            decay={2}
            color="#fff0da"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        <spotLight
            intensity={64.3}
            angle={Math.PI / 8}
            penumbra={0.15}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        <spotLight
            intensity={10}
            angle={Math.PI / 8}
            penumbra={0.15}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        <FlyControls movementSpeed={6} />
      </Suspense>
    </Canvas>
  );
}
