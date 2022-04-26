import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Switchmiddle(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/switch_middle.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['"switch_middle"'].geometry}
        material={nodes['"switch_middle"'].material}
      />
    </group>
  );
}

useGLTF.preload("/switch_middle.gltf");

