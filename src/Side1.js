
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {frameColor} from './Body.js'
import create from 'zustand';
import {useStore} from './store.js';
export default function Side1(props,{frameColor}) {
  const { nodes, materials } = useGLTF('/side1.gltf')
  const shellcolor = useStore(state => state.color)
  return (
      <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color={shellcolor}
          />
        </mesh>

  )
}

useGLTF.preload('/side1.gltf')

