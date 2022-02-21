import { Scroll, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Display({url, position, name, ...props}) {
    const [hovered, hover] = useState(false)
    const image = useRef()
    
    return (
        <group {...props}>
            <mesh 
                name={name}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                position={position}
            >
                {props.children}
                <Image raycast={() => null} ref={image} position={position} url={url}/>

            </mesh>

        </group>
    )
}