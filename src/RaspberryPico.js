import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';


export default function RaspberryPico(props) {
  const { nodes, materials } = useGLTF('/RaspberryPico.gltf')
  const shellcolor = useStore(state => state.color)
  return (
        <mesh {...props} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >

          <meshStandardMaterial
              attach="material"
              color="green"
          />
        </mesh>
      //to make transparent add:
      //color="#ff0000" opacity={0.1} transparent
      //toggle opacity value to change transparency.
  )
}

useGLTF.preload('/RaspberryPico.gltf')

