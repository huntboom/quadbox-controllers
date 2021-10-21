
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

/*function colorSwapper() {
    return(
        <div>
            <h1> Now choose the color you'd like:</h1>
        <Dropdown 
            formLabel="Frame Color"
            
        </div>
    );
};*/

export default function Bottom_Plate_3_Inch(props) {
  const { nodes, materials } = useGLTF('/Bottom_Plate_3_Inch.gltf')
  return (
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color="green"
          />
        </mesh>
  )
}

useGLTF.preload('/Bottom_Plate_3_Inch.gltf')
