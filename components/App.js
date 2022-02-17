import { Html, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "use-cannon";
import SecretPunks from "../galleries/SecretPunks";
import Player from "./Player/Player";

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

const App = () => {
    return (
        <Canvas
            concurrent
            gl={{ alpha: true }}
            camera={{ position: [20, 3, -20], fov: 60 }}
            shadows
            style={{ height: "100vh", width: "100vw", top: 0, left: 0, position: "absolute" }}
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
            <SecretPunks />
            
            
            </Suspense>
            
            <Physics>
                <Player/>   
                <CameraOp/>       
            </Physics>
        </Canvas>
    )
}

export default App;