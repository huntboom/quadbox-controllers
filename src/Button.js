
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ButtonRounded(props) {
  const { nodes, materials } = useGLTF('/buttonrounded.gltf')
  return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color="#58CCED"
          />
        </mesh>

  )
}

useGLTF.preload('/buttonrounded.gltf')

