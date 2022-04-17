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
          <Bottomright position={[-7,0,30]}/>
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-53.5,60,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-1,98,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[105.5,147,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[159,106,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[-134,122,0]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
              <Switchworking scale={[0.7,0.7,0.7]} rotation={[Math.PI / 1,0,0]} position={[]} />
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
      </Suspense>
      
   /
    </Canvas> 
  );
}


