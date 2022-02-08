import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bottom_Plate_3_Inch(withstring) {
  const { nodes, materials } = useGLTF('/Bottom_Plate_3_Inch.gltf')
  return (
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color="white"
          />
        </mesh>

  )
}

useGLTF.preload('/Bottom_Plate_3_Inch.gltf')
