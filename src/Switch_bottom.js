import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Switchbottom(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/switch_bottom.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['"switch_bottom"'].geometry}
        material={nodes['"switch_bottom"'].material}
      >
        <meshStandardMaterial
                attach="material"
                color="grey"
                opacity={0.5} transparent
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/switch_bottom.gltf");
