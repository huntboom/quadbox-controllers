import {Canvas} from '@react-three/fiber';
import Side1 from './Side1.js';
import ButtonRounded from './Button.js';
import CenterClip from './CenterClip.js';
import Side2 from './Side2.js';
import BottomRight from './BottomRight';
import { Suspense } from 'react';
import { Html,OrbitControls} from '@react-three/drei';
import { Light } from 'three';
import Body from './Body.js';
import HTMLInside from './HTMLInside.js'; 
import Switch from './Switch.js';
import Switchworking from './Switchworking.js';
import Bottomright from './BottomRight.js';
import Bottomleft from './Bottomleft.js';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Model from './Pico.js';
import Switchbottom from './Switch_bottom.js';
import Switchmiddle from './Switch_middle.js';
import Switchgroup from './Switchgroup.js';
export default function Scene() {
  const group = useRef();
  
  return(
    <Canvas colorManagement camera={{position: [0,-70,-100],fov:70}}>
      <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
     <pointLight intensity={1.15} position={[0, 24, -100]} />
          <group position={[0, 0, 0]}>
              <OrbitControls/>
          <Bottomleft position={[-7,0,30]}/>
              <Model position={[-2,130,10]} scale={[4.5,4.5,4.5]} rotation={[Math.PI / -2,4.725,0]} />
          <Bottomright position={[-7,0,30]}/>
         <CenterClip position={[-70,0,0]}/>
          <Side1 position={[-70,0,0]}/>
          <Side2 position={[-70,0,0]}/>
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-1,98,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[159,106,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-134,122,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-134,144,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-53.5,60,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-91,60,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-72,73,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-72,47,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-53,33,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-79,113,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-79,135,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-160,128.5,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-160,106.5,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-105.5,125,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-105.4,147,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[53.5,33,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[72.5,46,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[134,122,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[105.5,125,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[105.5,147,0]} />
              <Switchgroup scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[78.5,113.5,0]} />
             //125.5,147,0  -53.5,60,0 -91,60,0 -72,73,0 -72,47,0 -53,33,0 -79,113,0 -79,135,0 -160,128.5,0 -134,106.5,0 -105.4,125,0 -105.4,147, 0 43.5,33,0 72.5,46,0 134,122,0 105.5,125,0 78.5, 113.5,0   
          </group>
      </Suspense>
      
   
    </Canvas> 
  );
}


