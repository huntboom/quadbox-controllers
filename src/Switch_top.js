import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Switchtop(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/switch_top.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['"switch_top"'].geometry}
        material={nodes['"switch_top"'].material}
      />
    </group>
  );
}

useGLTF.preload("/switch_top.gltf");
