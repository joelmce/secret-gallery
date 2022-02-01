
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Experiment({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Experiment.gltf')
  const { actions } = useAnimations(animations, group)


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_1.geometry} material={materials['Physically Based (2)']} receiveShadow/>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Metal1} receiveShadow />
      <mesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials.pebbles} receiveShadow/>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Physically Based (1)']} receiveShadow/>
      <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
      <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
      <mesh geometry={nodes.Object_29.geometry} material={nodes.Object_29.material} />
      <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
      <mesh geometry={nodes.Object_27.geometry} material={nodes.Object_27.material} />
      <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
      <mesh geometry={nodes.Object_21.geometry} material={nodes.Object_21.material} />
      <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
      <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
      <mesh geometry={nodes.Object_24.geometry} material={nodes.Object_24.material} />
      <mesh geometry={nodes.Object_25.geometry} material={nodes.Object_25.material} />
      <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
      <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
      <mesh geometry={nodes.Object_31.geometry} material={nodes.Object_31.material} />
      <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
      <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
      <mesh geometry={nodes.Object_9.geometry} material={nodes.Object_9.material} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Physically Based']} />
      <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
      <mesh geometry={nodes.Object_13.geometry} material={nodes.Object_13.material} />
      <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
      <mesh geometry={nodes.Object_15.geometry} material={nodes.Object_15.material} />
      <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
      <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} position={[0, 0, 2.31]} />
      <mesh geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
      <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
      <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
      <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} position={[0, 0, 1.21]} />
      <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
      <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
      <mesh geometry={nodes.Object_43.geometry} material={nodes.Object_43.material} />
      <mesh geometry={nodes.Object_44.geometry} material={nodes.Object_44.material} />
      <mesh geometry={nodes.Object_33.geometry} material={nodes.Object_33.material} />
      <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
      <mesh geometry={nodes.Object_35.geometry} material={nodes.Object_35.material} />
      <mesh geometry={nodes.Object_37.geometry} material={nodes.Object_37.material} />
      <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
      <mesh geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
      <mesh
        name="Neb-Rotate"
        geometry={nodes['Neb-Rotate'].geometry}
        material={nodes['Neb-Rotate'].material}
        position={[18.14, 5.01, -5.39]}
        
      />
      <mesh geometry={nodes.Venus2_M01.geometry} material={materials.granite} />
      <mesh geometry={nodes.Object_45.geometry} material={nodes.Object_45.material} />

    </group>
  )
}

useGLTF.preload('/Experiment.gltf')
