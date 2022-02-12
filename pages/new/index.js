import React, { Component, Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FlyControls,
  Html,
  Loader,
  PointerLockControls,
} from "@react-three/drei";

import Experiment from "../../galleries/Experiment";
import HoverBox from "../../components/HoverBox";
import MainMenu from '../../components/MainMenu'



export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

  }


  /**
   * Returns the state for different classes
   * NOTE: This may be highly ineffecient but does the job perfectly for testing
   * @returns {boolean} state
   *
   */
  getState() {
    return this.state
  }

  /**
   * Handles the custom camera state so we can force the player in one position
   * @returns null but will never return null
   */
  CameraOp() {
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

  render() {
    let { show } = this.state

    return (
      <>
        {show && <HoverBox/>}
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
            <PointerLockControls/>
            <Experiment />
            <FlyControls movementSpeed={10} />
            <this.CameraOp />
          </Suspense>
        </Canvas>
      </>
    );
  }
}
