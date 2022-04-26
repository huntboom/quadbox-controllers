import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';
import ButtonRounded from './Button.js';
import Switchbottom from './Switch_bottom.js';
import Switchtop from './Switch_top.js';
import Switchmiddle from './Switch_middle.js';
import Switchworking from './Switchworking.js';
export default function Group() {
  const group = useRef();
 return(
      <group position={[0,0,0]} scale={[4.5,4.5,4.5]} ref={group}>
          <ButtonRounded/>
          <Switchtop/>
          <Switchbottom/>
          <Switchmiddle/>
     </group>
)
}
 


