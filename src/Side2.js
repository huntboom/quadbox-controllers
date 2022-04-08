import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';


export default function Side1(props) {
  const { nodes, materials } = useGLTF('/side2.gltf')
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

useGLTF.preload('/side2.gltf')

