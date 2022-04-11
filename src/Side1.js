import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {frameColor} from './Body.js'
import create from 'zustand';
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';

export default function Side1(props,{frameColor}) {
  const { nodes, materials } = useGLTF('/side1.gltf')
  const clearnessshell = useStore(state =>state.clearnessshell)
  const shellcolor = useStore(state => state.color)
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

useGLTF.preload('/side1.gltf')

