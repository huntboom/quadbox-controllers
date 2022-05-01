import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';

export default function ButtonRounded(props) {
    const clearness = useStore(state => state.clearness)
  const buttoncolor = useStore(state => state.buttoncolor)
  const { nodes, materials } = useGLTF('/buttonrounded.gltf')
    return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color={buttoncolor}
              opacity={clearness} transparent 
              
             // opacity={0.2} {transparent}
             // opacity={0.2} transparent
          />
        </mesh>

  )
}

useGLTF.preload('/buttonrounded.gltf')

