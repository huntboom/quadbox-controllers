
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Side1(props) {
  const { nodes, materials } = useGLTF('/side2.gltf')
  return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color="#5CDB95"
          />
        </mesh>

  )
}

useGLTF.preload('/side2.gltf')

