import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';

export default function Side1(props) {
 
  const shellcolor = useStore(state => state.color)
  const { nodes, materials } = useGLTF('/Centerclip.gltf')
  return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color={shellcolor}
          />
        </mesh>

  )
}

useGLTF.preload('/Centerclip.gltf')

