import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FlyControls,
  Html,
  Loader,
  PointerLockControls,
} from "@react-three/drei";

import Experiment from ".//Experiment";
import { DirectionalLight } from "three";

function CameraOp() {
  useFrame((state) => {
    if (state.camera.position.y > 3) {
      state.camera.position.y = 3;
    }
    if (state.camera.position.y < 3) {
      state.camera.position.y = 3;
    }
  });
  return null;
}


export default function Index() {
  return (
    <Canvas
      concurrent
      gl={{ alpha: true }}
      camera={{ position: [20, 3, -20], fov: 60 }}
      shadows
      style={{ height: "100vh", width: "100vw", top: 0, left: 0 }}
      colorManagement
      onCreated={(gl) => {
        gl.physicallyCorrectLights = true;
      }}
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

        <FlyControls movementSpeed={10} />
        <CameraOp />
      </Suspense>
    </Canvas>
  );
}
