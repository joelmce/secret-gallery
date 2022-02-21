import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export default function Vol2({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Vol2_B-ALL_no-lights.gltf')
  const { actions } = useAnimations(animations, group)

  let loader = new THREE.TextureLoader();

  let nftImage01 = new THREE.MeshBasicMaterial({
    map: loader.load('https://arweave.net/4uqTzKqCP7NsMe2cv6l4_TACmticIQN4JDcr2z_lqDs/2844f29f647779fdec24d29c1737066b.png')
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.steelFrame.geometry} material={materials.Metal1} scale={[0.91, 1, 1]} />
      <mesh
        name="Nebula"
        geometry={nodes.Nebula.geometry}
        material={materials['Material_12.001']}
        position={[18.14, 5.01, -5.39]}
      />
      <mesh geometry={nodes.pergola001.geometry} material={nodes.pergola001.material} />
      <mesh
        geometry={nodes['wall1-L'].geometry}
        material={nodes['wall1-L'].material}
        position={[-4.81, 4.18, -12.4]}
        scale={[1, 1.04, 1]}
      />
      <mesh
        geometry={nodes['wall1-R'].geometry}
        material={nodes['wall1-R'].material}
        position={[4.7, 4.16, -9.28]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh geometry={nodes.Statue.geometry} material={materials['granite.001']} />
      <mesh geometry={nodes.ltCovers.geometry} material={materials.Material_12} />
      <mesh geometry={nodes.secretS.geometry} material={materials['Brushed Metal']} />
      <mesh geometry={nodes.treeBranch.geometry} material={materials.birk1_bn} />
      <mesh geometry={nodes.treeFolia.geometry} material={materials.bk1_spulp} />
      <mesh geometry={nodes.treeTrunk.geometry} material={materials.birch1} />
      <mesh geometry={nodes.floorStones.geometry} material={materials.pebbles} />
      <mesh geometry={nodes.floorWood.geometry} material={nodes.floorWood.material} position={[0, 0.07, 0]} />
      <mesh geometry={nodes.shellConc.geometry} material={materials.concrete1} />
      <mesh geometry={nodes.shellWood.geometry} material={nodes.shellWood.material} />
      <mesh geometry={nodes.floorInside.geometry} material={materials['concrete1 (1)']} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Brushed Metal.001']} position={[18.46, 0.02, 7.23]} />
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
        position={[31, 3.61, -2.32]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.nftImage001.geometry}
        material={nodes.nftImage001.material}
        position={[31, 3.61, -9.61]}
        rotation={[0, Math.PI / 2, 0]}
      />
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
      <mesh geometry={nodes['terrain-rock'].geometry} material={materials['Physically Based (1)']} />
      <mesh
        geometry={nodes['terrain-ground001'].geometry}
        material={materials.grassNew}
        position={[5.89, 0, 25.13]}
        scale={[0.65, 1, 0.43]}
      />
    </group>
  )
}

useGLTF.preload('/Vol2_B-ALL_no-lights.gltf')
