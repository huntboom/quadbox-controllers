import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useStore } from './store.js';
export default function Switchtop(props) {
  const group = useRef();
  const switchcolor = useStore(state => state.switchcolor)
  const { nodes, materials } = useGLTF("/switch_top.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['"switch_top"'].geometry}
        material={nodes['"switch_top"'].material}
      >
          <meshStandardMaterial
              attach="material"
              color={switchcolor}
          />
      </mesh>
    </group>
  );
}

useGLTF.preload("/switch_top.gltf");
