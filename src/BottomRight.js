
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BottomRight(withstring) {
  const { nodes, materials } = useGLTF('/Bottom_Right.gltf')
  return (
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color="#ff7b7b"
          />
        </mesh>

  )
}

useGLTF.preload('/Bottom_Right.gltf')

