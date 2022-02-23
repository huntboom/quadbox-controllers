import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';

export default function ButtonRounded(props) {

  const buttoncolor = useStore(state => state.buttoncolor)
  const { nodes, materials } = useGLTF('/buttonrounded.gltf')
  return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial
              attach="material"
              color={buttoncolor}
          />
        </mesh>

  )
}

useGLTF.preload('/buttonrounded.gltf')

