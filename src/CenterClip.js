import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';

export default function CenterClip(props) {
  const shellcolor = useStore(state => state.color)
  const { nodes, materials } = useGLTF('/Centerclip.gltf')
  const clearnessshell = useStore(state =>state.clearnessshell)
  return (
        <mesh  {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color={shellcolor}
              opacity={clearnessshell} transparent
          />
        </mesh>

  )
}

useGLTF.preload('/Centerclip.gltf')

