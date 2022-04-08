import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';
import Side1 from './Side1.js';
import ButtonRounded from './Button.js';
import CenterClip from './CenterClip.js';
import Side2 from './Side2.js';
import HTMLInside from './HTMLInside.js';
import Bottomright from './BottomRight.js';
import Bottomleft from './Bottomleft.js';

export default function Group() {
  const group = useRef();
  useFrame(() => {
    // rotating the group instead of the mesh
    group.current.rotation.y += Math.PI / 1000
    group.current.rotation.x += Math.PI / 2000
  }) 
  return(
      <group position={[0,0,0]} ref={group}>
          <Bottomleft position={[-7,0,30]}/>
          <Bottomright position={[-7,0,30]}/>
          <CenterClip position={[-70,0,0]}/>
          <Side1 position={[-70,0,0]}/>
          <Side2 position={[-70,0,0]}/>
              <ButtonRounded position={[23,94,4]}/>
              <ButtonRounded position={[129.5,143,4]}/>
              <ButtonRounded position={[183,102,4]}/>
              <ButtonRounded position={[-110,118,4]}/>
              <ButtonRounded position={[-29.5,56,4]}/>
              <ButtonRounded position={[-67,56,4]}/>
              <ButtonRounded position={[-48,69,4]}/>
              <ButtonRounded position={[-48,43,4]}/>
              <ButtonRounded position={[-29,29,4]}/>
              <ButtonRounded position={[-55,109,4]}/>
              <ButtonRounded position={[-55,131,4]}/>
              <ButtonRounded position={[-136,124.5,4]}/>
              <ButtonRounded position={[-136,102.5,4]}/>
              <ButtonRounded position={[-110,140,4]}/>
              <ButtonRounded position={[-81.5,121,4]}/>
              <ButtonRounded position={[-81.5,143,4]}/>
              <ButtonRounded position={[77.5,29,4]}/>
              <ButtonRounded position={[96.5,42,4]}/>
              <ButtonRounded position={[158,118,4]}/>
              <ButtonRounded position={[129.5,121,4]}/>
              <ButtonRounded position={[103.5,109.5,4]}/>
      </group>
)
}
 


