import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Switchworking(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/switch_mx.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OpenSCAD_Model.geometry}
        material={nodes.OpenSCAD_Model.material}
        >
    <meshStandardMaterial
              attach="material"
              color="green"
    />
    </mesh>
    </group>
  );
}

useGLTF.preload("/switch_mx.gltf");
