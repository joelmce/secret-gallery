import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FlyControls,
  Html,
  Loader,
  PointerLockControls,
} from "@react-three/drei";

import Experiment from "./Experiment";
import { useKeyState } from "use-key-state";

/**
 * Handles the custom camera state so we can force the player in one position
 * @returns null but will never return null
 */
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
  const { keyE } = useKeyState({ keyE: "e" });

  useEffect(() => {
    if (keyE.down) {
      console.log("test");
    } else if (keyE.up) {
      console.log("Up");
    }
  }, [keyE]);
  return (
    <>
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
            <Html center zIndexRange={1}>
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
    </>
  );
}
