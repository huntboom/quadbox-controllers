import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useStore} from './store.js';
import { useFrame } from '@react-three/fiber';
import ButtonRounded from './Button.js';
import Switchbottom from './Switch_bottom.js';
import Switchtop from './Switch_top.js';
import Switchmiddle from './Switch_middle.js';
import Switchworking from './Switchworking.js';

export default function Switchgroup(props) {
  const group = useRef();
 return(
      <group ref={group} position={props.position} >
          <ButtonRounded position={[23.90,-4,5]}/>
          <Switchtop rotation={[Math.PI / 1,0,0]}/>
          <Switchbottom rotation={[Math.PI / 1,0,0]}/>
          <Switchmiddle rotation={[Math.PI / 1,0,0]}/>
     </group>
)
}
 


