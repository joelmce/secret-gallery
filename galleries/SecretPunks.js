import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { getState } from '../pages/new/index'

export default function SecretPunks({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/SecretPunks.gltf')
  const { actions } = useAnimations(animations, group)
  const [hovered, setHovered] = useState(false);
  let state = getState
  return (
    <group ref={group} {...props} dispose={null} castShadow receiveShadow> 
      <mesh geometry={nodes['terrain-ground'].geometry} material={materials['Physically Based (2)']} />
      <mesh geometry={nodes['terrain-rock'].geometry} material={materials['Physically Based (1)']} />
      <mesh geometry={nodes.treeFolia.geometry} material={materials.bk1_spulp} />
      <mesh geometry={nodes.treeBranch.geometry} material={materials.birk1_bn} />
      <mesh geometry={nodes.treeTrunk.geometry} material={materials.birch1} />
      <mesh geometry={nodes.shellConc.geometry} material={nodes.shellConc.material} />
      <mesh geometry={nodes.shellConc001.geometry} material={nodes.shellConc001.material} />
      <mesh geometry={nodes.shellConc002.geometry} material={nodes.shellConc002.material} />
      <mesh geometry={nodes.shellConc003.geometry} material={nodes.shellConc003.material} />
      <mesh geometry={nodes.shellWood001.geometry} material={nodes.shellWood001.material} />
      <mesh geometry={nodes.shellWood002.geometry} material={nodes.shellWood002.material} />
      <mesh geometry={nodes.shellWood003.geometry} material={nodes.shellWood003.material} />
      <mesh geometry={nodes.Statue.geometry} material={materials.granite} />
      <group position={[0, 7.92, -20.36]} rotation={[0.83, -1.16, 0.01]}>
        <spotLight intensity={0.9} angle={0.87} penumbra={0.5} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[14.13, 6.11, -21.14]} rotation={[0.63, -1.16, 0.01]}>
        <spotLight
          intensity={0.2}
          angle={0.58}
          penumbra={0.49}
          decay={2}
          color="#fff0da"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[22.41, 6.11, -21.14]} rotation={[0.63, -1.16, 0.01]}>
        <spotLight intensity={0.9} angle={0.67} penumbra={0.73} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[36.43, 7.83, -20.44]} rotation={[0.85, -1.15, 0.1]}>
        <spotLight intensity={0.9} angle={0.64} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[33.68, 7.91, -9.54]} rotation={[0, 0, -0.61]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[33.68, 7.91, -2.27]} rotation={[0, 0, -0.61]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[33.68, 7.91, 4.39]} rotation={[0, 0, -0.61]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[27.23, 6.41, -9.54]} rotation={[0, 0, 0.93]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[27.23, 6.41, -2.28]} rotation={[0, 0, 0.93]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[27.23, 6.41, 4.38]} rotation={[0, 0, 0.93]}>
        <spotLight intensity={0.2} angle={Math.PI / 8} penumbra={0.15} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      <group position={[0, 500, 0]}>
        <directionalLight intensity={1.0} decay={2} rotation={[-Math.PI / 2, 0, 0]} castShadow/>
      </group>
      
      <mesh geometry={nodes.secretS.geometry} material={materials['Brushed Metal']} />
      <mesh geometry={nodes.steelFrame.geometry} material={materials.Metal1} scale={[0.91, 1, 1]} />
      <mesh geometry={nodes.floorStones.geometry} material={materials.pebbles} />
      <mesh geometry={nodes.floorWood.geometry} material={nodes.floorWood.material} position={[0, 0.07, 0]} />
      <mesh geometry={nodes.pergola001.geometry} material={materials['Physically Based']} />
      <mesh geometry={nodes.ltCovers.geometry} material={materials.Material_12} />
      <mesh geometry={nodes.floor001.geometry} material={materials['concrete1 (1)']} />
      <mesh
        name="Nebula"
        geometry={nodes.Nebula.geometry}
        material={materials['Material_12.001']}
        position={[18.14, 5.01, -5.39]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[4.7, 4.16, -9.28]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        geometry={nodes['wall1-L'].geometry}
        material={nodes['wall1-L'].material}
        position={[-4.81, 4.18, -12.4]}
        scale={[1, 1.04, 1]}
      />
      <mesh
        geometry={nodes['wall1-R'].geometry}
        material={materials['woodBoards1.001']}
        position={[4.7, 4.16, -9.28]}
        scale={[0.1, 0.1, 0.1]}
      />
      <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        console.log("Successful event");
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        console.log("Unhovered state");
      }}>
      <mesh
        geometry={nodes.nftImage002.geometry}
        material={nodes.nftImage002.material}
        position={[-0.05, 4.16, -24.29]}
      />
      <mesh
        geometry={nodes.nftImage003.geometry}
        material={nodes.nftImage003.material}
        position={[14.02, 3.23, -22.92]}
      />
      <mesh
        geometry={nodes.nftImage004.geometry}
        material={nodes.nftImage004.material}
        position={[22.18, 3.23, -22.93]}
      />
      <mesh
        geometry={nodes.nftImage005.geometry}
        material={nodes.nftImage005.material}
        position={[36.43, 4.17, -22.93]}
      />
      <mesh
        geometry={nodes.nftImage006.geometry}
        material={nodes.nftImage006.material}
        position={[30.19, 3.61, -9.59]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage007.geometry}
        material={nodes.nftImage007.material}
        position={[30.19, 3.61, -2.27]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage008.geometry}
        material={nodes.nftImage008.material}
        position={[30.19, 3.61, 4.44]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage009.geometry}
        material={nodes.nftImage009.material}
        position={[31, 3.61, 4.44]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage010.geometry}
        material={nodes.nftImage010.material}
        position={[31, 3.61, -2.32]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage001.geometry}
        material={nodes.nftImage001.material}
        position={[31, 3.61, -9.61]}
        rotation={[0, Math.PI / 2, 0]}
      /> </group>
      <mesh
        geometry={nodes.nftFrame010.geometry}
        material={nodes.nftFrame010.material}
        position={[-0.05, 4.16, -24.29]}
      />
      <mesh
        geometry={nodes.nftFrame002.geometry}
        material={nodes.nftFrame002.material}
        position={[14.02, 3.23, -22.92]}
      />
      <mesh
        geometry={nodes.nftFrame003.geometry}
        material={nodes.nftFrame003.material}
        position={[22.18, 3.23, -22.93]}
      />
      <mesh
        geometry={nodes.nftFrame004.geometry}
        material={nodes.nftFrame004.material}
        position={[36.43, 4.17, -22.93]}
      />
      <mesh
        geometry={nodes.nftFrame005.geometry}
        material={nodes.nftFrame005.material}
        position={[30.19, 3.61, -9.59]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftFrame006.geometry}
        material={nodes.nftFrame006.material}
        position={[30.19, 3.61, -2.27]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftFrame007.geometry}
        material={nodes.nftFrame007.material}
        position={[30.19, 3.61, 4.44]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftFrame008.geometry}
        material={nodes.nftFrame008.material}
        position={[31, 3.61, 4.44]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftFrame009.geometry}
        material={nodes.nftFrame009.material}
        position={[31, 3.61, -2.32]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftFrame001.geometry}
        material={nodes.nftFrame001.material}
        position={[31, 3.61, -9.61]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/SecretPunks.gltf')
