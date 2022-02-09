import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { getState } from '../pages/new/index'

export default function Experiment({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./Experiment.glb");
  const [hovered, setHovered] = useState(false);
  let state = getState

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes["terrain-ground"].geometry}
        material={materials["Physically Based (2)"]}
      />
      <mesh geometry={nodes.Object_2.geometry} material={materials.Metal1} />
      <mesh
        geometry={nodes.floorStones.geometry}
        material={materials.pebbles}
      />
      <mesh
        geometry={nodes["terrain-rock"].geometry}
        material={materials["Physically Based (1)"]}
      />
      <mesh
        geometry={nodes.treeFolia.geometry}
        material={materials.bk1_spulp}
      />
      <mesh
        geometry={nodes.treeBranch.geometry}
        material={materials.birk1_bn}
      />
      <mesh geometry={nodes.treeTrunk.geometry} material={materials.birch1} />
      <group
        position={[30.98, 3.6, 4.41]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          console.log("Successful event");
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          console.log("Unhovered state");
        }}
      >
        <mesh
          geometry={nodes.nft7.geometry}
          material={materials["nft-anon1.001"]}
        />
        <mesh
          geometry={nodes.nft7_1.geometry}
          material={materials["nft-anon1.002"]}
        />
        <mesh
          geometry={nodes.nft7_2.geometry}
          material={materials["nft-anon1.003"]}
        />
        <mesh
          geometry={nodes.nft7_3.geometry}
          material={materials["nft-anon1.006"]}
        />
        <mesh
          geometry={nodes.nft7_4.geometry}
          material={materials["nft-anon1.005"]}
        />
        <mesh
          geometry={nodes.nft7_5.geometry}
          material={materials["nft-anon1.004"]}
        />
        <mesh
          geometry={nodes.nft7_6.geometry}
          material={materials["nft-anon1"]}
        />
      </group>

      <mesh
        geometry={nodes.floorWood.geometry}
        material={nodes.floorWood.material}
      />
      <mesh
        geometry={nodes.pergola001.geometry}
        material={materials["Physically Based"]}
      />
      <mesh
        geometry={nodes.ltCovers001.geometry}
        material={nodes.ltCovers001.material}
      />
      <mesh
        geometry={nodes.ltCovers002.geometry}
        material={nodes.ltCovers002.material}
      />
      <mesh
        geometry={nodes.ltCovers003.geometry}
        material={nodes.ltCovers003.material}
      />
      <mesh
        geometry={nodes.ltCovers004.geometry}
        material={nodes.ltCovers004.material}
      />
      <mesh
        geometry={nodes.ltCovers005.geometry}
        material={nodes.ltCovers005.material}
        position={[0, 0, 2.31]}
      />
      <mesh
        geometry={nodes.ltCovers006.geometry}
        material={nodes.ltCovers006.material}
      />
      <mesh
        geometry={nodes.ltCovers007.geometry}
        material={nodes.ltCovers007.material}
      />
      <mesh
        geometry={nodes.ltCovers008.geometry}
        material={nodes.ltCovers008.material}
      />
      <mesh
        geometry={nodes.ltCovers009.geometry}
        material={nodes.ltCovers009.material}
      />
      <mesh
        geometry={nodes.ltCovers.geometry}
        material={nodes.ltCovers.material}
        position={[0, 0, 1.21]}
      />
      <mesh
        geometry={nodes.shellConc.geometry}
        material={nodes.shellConc.material}
      />
      <mesh
        geometry={nodes.shellConc001.geometry}
        material={nodes.shellConc001.material}
      />
      <mesh
        geometry={nodes.shellConc002.geometry}
        material={nodes.shellConc002.material}
      />
      <mesh
        geometry={nodes.shellConc003.geometry}
        material={nodes.shellConc003.material}
      />
      <mesh
        geometry={nodes.shellWood001.geometry}
        material={nodes.shellWood001.material}
      />
      <mesh
        geometry={nodes.shellWood002.geometry}
        material={nodes.shellWood002.material}
      />
      <mesh
        geometry={nodes.shellWood003.geometry}
        material={nodes.shellWood003.material}
      />
      <mesh
        geometry={nodes.floor001.geometry}
        material={materials["concrete1 (1)"]}
      />
      <mesh
        name="Neb-Rotate"
        geometry={nodes["Neb-Rotate"].geometry}
        material={materials["Material_12.001"]}
        position={[18.14, 5.01, -5.39]}
      />
      <mesh geometry={nodes.Statue.geometry} material={materials.granite} />
      <group position={[0, 7.92, -20.36]} rotation={[0.63, -1.16, 0.01]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[14.13, 6.11, -21.14]} rotation={[0.63, -1.16, 0.01]}>
        <pointLight
          intensity={0.2}
          decay={2}
          color="#fff0da"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[22.41, 6.11, -21.14]} rotation={[0.63, -1.16, 0.01]}>
        <spotLight
          intensity={0.2}
          angle={Math.PI / 8}
          penumbra={0.15}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[36.43, 7.83, -20.44]} rotation={[0.63, -1.16, 0.01]}>
        <spotLight
          intensity={0.2}
          angle={Math.PI / 8}
          penumbra={0.15}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[33.68, 7.91, -9.54]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[33.68, 7.91, -2.27]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[33.68, 7.91, 4.39]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[27.23, 6.41, -9.54]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[27.23, 6.41, -2.28]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[27.23, 6.41, 4.38]}>
        <pointLight intensity={0.2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, 500, 0]}>
        <directionalLight
          intensity={0.9}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        geometry={nodes.Object_45.geometry}
        material={nodes.Object_45.material}
      />
    </group>
  );
}

useGLTF.preload("/Experiment.glb");
